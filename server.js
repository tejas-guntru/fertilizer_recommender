import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Gemini AI setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- Helper Function: English Prompt ---
function formatFertilizerPrompt(data) {
  const {
    temperature,
    moisture,
    humidity,
    phLevel,
    soilType,
    season,
    location,
    previousCrop,
    budget,
  } = data;

  return `
You are an agricultural expert. Recommend the best fertilizer based on the following parameters:

🌡️ Temperature: ${temperature}°C  
💧 Moisture: ${moisture}%  
☁️ Humidity: ${humidity}%  
🧪 pH Level: ${phLevel}  
🌱 Soil Type: ${soilType}  
🕐 Season: ${season}  
📍 Location (State in India): ${location}  
🌾 Previous Crop: ${previousCrop}  
💰 Budget: ₹${budget}

Please provide:
1. The most suitable fertilizer(s)
2. Application dosage and frequency
3. Any additional tips or precautions
Output should be in English.
`;
}

// --- Helper Function: Translation ---
async function translateText(text, targetLang) {
  if (targetLang === "en") return text;

  const langMap = { hi: "Hindi", te: "Telugu" };
  const languageName = langMap[targetLang] || "English";

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const translatePrompt = `
You are a professional translator specialized in agriculture.
Translate the following fertilizer recommendation text into **${languageName}** clearly and naturally.
Keep all fertilizer names and technical terms accurate.
Do not explain anything — output only the translated text.

Text to translate:
${text}
`;

  try {
    const result = await model.generateContent(translatePrompt);
    return result.response.text().trim();
  } catch (error) {
    console.error("❌ Translation error:", error);
    return text; // fallback to English
  }
}

// --- Main API Route ---
app.post("/predict-fertilizer", async (req, res) => {
  try {
    const { language = "en", ...data } = req.body;

    // Validation
    const requiredFields = [
      "temperature",
      "moisture",
      "humidity",
      "phLevel",
      "soilType",
      "season",
      "location",
      "previousCrop",
      "budget",
    ];

    for (const field of requiredFields) {
      if (
        !data[field] ||
        data[field] === "Select Soil Type" ||
        data[field] === "Select Season" ||
        data[field] === "Select Location"
      ) {
        return res.status(400).json({ error: `Missing or invalid field: ${field}` });
      }
    }

    // Generate English recommendation
    const prompt = formatFertilizerPrompt(data);
    console.log("🧩 Sending Prompt to Gemini:\n", prompt);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const englishResult = await model.generateContent(prompt);
    const englishOutput = englishResult.response.text().trim();

    console.log("✅ English recommendation generated");

    // Translate to selected language (if not English)
    const finalOutput = await translateText(englishOutput, language);

    res.json({ result: finalOutput });
  } catch (error) {
    console.error("❌ Error generating fertilizer recommendation:", error);
    res.status(500).json({ error: "Failed to generate fertilizer recommendation" });
  }
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
