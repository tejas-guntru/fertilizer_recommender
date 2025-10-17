import React, { useState } from "react";
import { marked } from "marked";
import { Navbar } from "./navabr"; // ✅ Ensure correct file name

const translations = {
  en: {
    title: "Fertilizer Recommendation",
    submit: "Get Recommendation",
    generating: "Generating...",
    fields: {
      temperature: "Temperature (°C)",
      moisture: "Moisture (%)",
      humidity: "Humidity (%)",
      phLevel: "pH Level",
      soilType: "Soil Type",
      season: "Season",
      location: "Location",
      previousCrop: "Previous Crop",
      budget: "Budget (₹)",
    },
    soilOptions: ["Loamy", "Clay", "Sandy", "Silty", "Peaty", "Chalky"],
    seasonOptions: ["Kharif", "Rabi", "Zaid"],
    cropOptions: ["Wheat", "Rice", "Maize", "Vegetables", "Pulses", "Other"],
    defaultLocation: "India",
    outputPlaceholder: "Enter details to get a fertilizer recommendation.",
  },
  hi: {
    title: "उर्वरक सिफारिश प्रणाली",
    submit: "सिफारिश प्राप्त करें",
    generating: "सुझाव तैयार किया जा रहा है...",
    fields: {
      temperature: "तापमान (°C)",
      moisture: "नमी (%)",
      humidity: "आर्द्रता (%)",
      phLevel: "pH स्तर",
      soilType: "मिट्टी का प्रकार",
      season: "मौसम",
      location: "स्थान",
      previousCrop: "पिछली फसल",
      budget: "बजट (₹)",
    },
    soilOptions: [
      "दोमट (Loamy)",
      "काली (Clay)",
      "बलुई (Sandy)",
      "गादयुक्त (Silty)",
      "पीटी (Peaty)",
      "चूना युक्त (Chalky)",
    ],
    seasonOptions: ["खरीफ", "रबी", "जायद"],
    cropOptions: ["गेहूं", "धान", "मकई", "सब्जियां", "दालें", "अन्य"],
    defaultLocation: "मध्य प्रदेश",
    outputPlaceholder: "जानकारी दर्ज करें ताकि उर्वरक सिफारिश प्राप्त हो सके।",
  },
  te: {
    title: "ఎరువుల సిఫార్సు వ్యవస్థ",
    submit: "సిఫార్సు పొందండి",
    generating: "అంచనా వేస్తోంది...",
    fields: {
      temperature: "ఉష్ణోగ్రత (°C)",
      moisture: "తేమ (%)",
      humidity: "తేమతాపం (%)",
      phLevel: "pH స్థాయి",
      soilType: "మట్టి రకం",
      season: "ఋతువు",
      location: "ప్రాంతం (రాష్ట్రం)",
      previousCrop: "మునుపటి పంట",
      budget: "బడ్జెట్ (₹)",
    },
    soilOptions: [
      "లోమి (Loamy)",
      "క్లే (Clay)",
      "ఇసుక (Sandy)",
      "సిల్టీ (Silty)",
      "పీటీ (Peaty)",
      "చాకీ (Chalky)",
    ],
    seasonOptions: ["ఖరీఫ్", "రబీ", "జైద్"],
    cropOptions: ["బియ్యం", "గోధుమలు", "మొక్కజొన్న", "కూరగాయలు", "పప్పులు", "ఇతర"],
    defaultLocation: "ఆంధ్ర ప్రదేశ్",
    outputPlaceholder: "వివరాలను నమోదు చేయండి మరియు సిఫార్సు పొందండి.",
  },
};

const Fertilizer = () => {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  const [temperature, setTemperature] = useState("25");
  const [moisture, setMoisture] = useState("50");
  const [humidity, setHumidity] = useState("60");
  const [phLevel, setPhLevel] = useState("6.5");
  const [soilType, setSoilType] = useState(t.soilOptions[0]);
  const [season, setSeason] = useState(t.seasonOptions[0]);
  const [location, setLocation] = useState(t.defaultLocation);
  const [previousCrop, setPreviousCrop] = useState(t.cropOptions[0]);
  const [budget, setBudget] = useState("1000");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("http://localhost:5000/predict-fertilizer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          temperature,
          moisture,
          humidity,
          phLevel,
          soilType,
          season,
          location,
          previousCrop,
          budget,
          language,
        }),
      });

      const data = await response.json();
      if (data.result) setResult(data.result);
      else setResult("No recommendation available.");
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setResult("Error fetching recommendation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        {/* Language Switch */}
        <div className="flex justify-end mb-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="te">తెలుగు</option>
          </select>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
          {t.title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">{t.fields.temperature}</label>
              <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">{t.fields.moisture}</label>
              <input
                type="number"
                value={moisture}
                onChange={(e) => setMoisture(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">{t.fields.humidity}</label>
              <input
                type="number"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">{t.fields.phLevel}</label>
              <input
                type="number"
                step="0.1"
                value={phLevel}
                onChange={(e) => setPhLevel(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-medium">{t.fields.soilType}</label>
              <select
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                {t.soilOptions.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">{t.fields.season}</label>
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                {t.seasonOptions.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">{t.fields.location}</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">{t.fields.previousCrop}</label>
              <select
                value={previousCrop}
                onChange={(e) => setPreviousCrop(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                {t.cropOptions.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">{t.fields.budget}</label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition text-lg"
            disabled={loading}
          >
            {loading ? t.generating : t.submit}
          </button>
        </form>

        {/* Output */}
        <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg min-h-[150px]">
          {loading ? (
            <p className="text-center text-gray-500">Processing...</p>
          ) : result ? (
            <div
              className="prose prose-green max-w-none"
              dangerouslySetInnerHTML={{ __html: marked(result) }}
            />
          ) : (
            <p className="text-gray-400 text-center">{t.outputPlaceholder}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Fertilizer;
