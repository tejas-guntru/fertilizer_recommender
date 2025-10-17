import React, { useState } from "react";
import { Navbar } from "./navabr"; // ✅ Ensure correct import path

const FertilizerHindi = () => {
  const [temperature, setTemperature] = useState("25");
  const [moisture, setMoisture] = useState("50");
  const [phLevel, setPhLevel] = useState("6.5");
  const [humidity, setHumidity] = useState("60");
  const [soilType, setSoilType] = useState("दोमट");
  const [season, setSeason] = useState("खरीफ");
  const [location, setLocation] = useState("मध्य प्रदेश");
  const [previousCrop, setPreviousCrop] = useState("गेहूं");
  const [budget, setBudget] = useState("1000");
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRecommendation("");

    try {
      const response = await fetch("http://localhost:5000/predict-fertilizer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          temperature,
          moisture,
          phLevel,
          humidity,
          soilType,
          season,
          location,
          previousCrop,
          budget,
        }),
      });

      const data = await response.json();
      setRecommendation(data.recommendation);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setRecommendation("<p>सिफारिश प्राप्त करने में विफल रहा।</p>");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          उर्वरक सिफारिश प्रणाली
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">तापमान (°C):</label>
              <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">नमी (%):</label>
              <input
                type="number"
                value={moisture}
                onChange={(e) => setMoisture(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">आर्द्रता (%):</label>
              <input
                type="number"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">pH स्तर:</label>
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
              <label className="block mb-1 font-medium">मिट्टी का प्रकार:</label>
              <select
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option>दोमट (Loamy)</option>
                <option>काली (Clay)</option>
                <option>बलुई (Sandy)</option>
                <option>गादयुक्त (Silty)</option>
                <option>पीटी (Peaty)</option>
                <option>चूना युक्त (Chalky)</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">मौसम / फसल का मौसम:</label>
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option>खरीफ</option>
                <option>रबी</option>
                <option>जायद</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">राज्य (स्थान):</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option>उत्तर प्रदेश</option>
                <option>मध्य प्रदेश</option>
                <option>बिहार</option>
                <option>राजस्थान</option>
                <option>हरियाणा</option>
                <option>पंजाब</option>
                <option>गुजरात</option>
                <option>महाराष्ट्र</option>
                <option>छत्तीसगढ़</option>
                <option>ओडिशा</option>
                <option>झारखंड</option>
                <option>पश्चिम बंगाल</option>
                <option>आंध्र प्रदेश</option>
                <option>तेलंगाना</option>
                <option>कर्नाटक</option>
                <option>केरल</option>
                <option>तामिलनाडु</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">पिछली फसल:</label>
              <select
                value={previousCrop}
                onChange={(e) => setPreviousCrop(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option>गेहूं</option>
                <option>धान</option>
                <option>मकई</option>
                <option>सब्जियां</option>
                <option>दालें</option>
                <option>अन्य</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">बजट (₹):</label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition text-lg"
            disabled={loading}
          >
            {loading ? "सुझाव तैयार किया जा रहा है..." : "सबमिट करें"}
          </button>
        </form>

        {recommendation && (
          <div
            className="mt-6 p-6 bg-green-100 text-green-800 rounded min-h-[200px] md:min-h-[300px] w-full overflow-auto"
            dangerouslySetInnerHTML={{ __html: recommendation }}
          />
        )}
      </div>
    </>
  );
};

export default FertilizerHindi;
