import React, { useState } from "react";
import { Navbar } from "./navabr"; // ✅ Keep consistent import

const FertilizerTelugu = () => {
  const [temperature, setTemperature] = useState("25");
  const [moisture, setMoisture] = useState("50");
  const [phLevel, setPhLevel] = useState("6.5");
  const [humidity, setHumidity] = useState("60");
  const [soilType, setSoilType] = useState("Loamy");
  const [season, setSeason] = useState("Kharif");
  const [location, setLocation] = useState("Andhra Pradesh");
  const [previousCrop, setPreviousCrop] = useState("Paddy");
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
      setRecommendation("<p>సిఫార్సును పొందడం విఫలమైంది.</p>");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          ఎరువుల సిఫార్సు వ్యవస్థ
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">ఉష్ణోగ్రత (°C):</label>
              <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">తేమ (%):</label>
              <input
                type="number"
                value={moisture}
                onChange={(e) => setMoisture(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">తేమతాపం (%):</label>
              <input
                type="number"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">pH స్థాయి:</label>
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
              <label className="block mb-1 font-medium">మట్టి రకం:</label>
              <select
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option>లోమి (Loamy)</option>
                <option>క్లే (Clay)</option>
                <option>ఇసుక (Sandy)</option>
                <option>సిల్టీ (Silty)</option>
                <option>పీటీ (Peaty)</option>
                <option>చాకీ (Chalky)</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">ఋతువు:</label>
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option>ఖరీఫ్</option>
                <option>రబీ</option>
                <option>జైద్</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">ప్రాంతం (రాష్ట్రం):</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option>ఆంధ్ర ప్రదేశ్</option>
                <option>తెలంగాణ</option>
                <option>తమిళనాడు</option>
                <option>కర్ణాటక</option>
                <option>కేరళ</option>
                <option>మహారాష్ట్ర</option>
                <option>ఓడిశా</option>
                <option>గుజరాత్</option>
                <option>మధ్యప్రదేశ్</option>
                <option>ఉత్తర ప్రదేశ్</option>
                <option>పంజాబ్</option>
                <option>హరియాణా</option>
                <option>రాజస్థాన్</option>
                <option>బీహార్</option>
                <option>పశ్చిమ బెంగాల్</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">మునుపటి పంట:</label>
              <select
                value={previousCrop}
                onChange={(e) => setPreviousCrop(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option>బియ్యం</option>
                <option>గోధుమలు</option>
                <option>మొక్కజొన్న</option>
                <option>కూరగాయలు</option>
                <option>పప్పులు</option>
                <option>ఇతర</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">బడ్జెట్ (₹):</label>
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
            {loading ? "అంచనా వేస్తోంది..." : "సమర్పించు"}
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

export default FertilizerTelugu;
