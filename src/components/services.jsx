import React, { useState } from 'react';  
import { Navbar } from './navabr';

const Services = () => {
  const [soilType, setSoilType] = useState('');
  const [season, setSeason] = useState('');
  const [location, setLocation] = useState('');
  const [previousCrop, setPreviousCrop] = useState('');
  const [budget, setBudget] = useState('');
  const [crops, setCrops] = useState(null);
  const [fertilizers, setFertilizers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(null);

  // Sample data for dropdowns
  const soilTypes = ['Loamy', 'Sandy', 'Clay', 'Silty', 'Peaty', 'Saline'];
  const seasons = ['Winter', 'Summer', 'Monsoon', 'Spring', 'Autumn', 'Pre-Monsoon'];
  const locations = [
    'Andhra Pradesh', 'Bihar', 'Gujarat', 'Haryana', 'Karnataka', 'Kerala', 
    'Madhya Pradesh', 'Maharashtra', 'Punjab', 'Rajasthan', 'Tamil Nadu', 
    'Telangana', 'Uttar Pradesh', 'West Bengal', 'Odisha', 'Uttarakhand', 
    'Himachal Pradesh', 'Jammu & Kashmir', 'Chhattisgarh', 'Assam', 
    'Tripura', 'Nagaland', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 
    'Sikkim', 'Goa', 'Mizoram', 'Andaman & Nicobar Islands', 
    'Lakshadweep', 'Dadra & Nagar Haveli', 'Daman & Diu', 
    'Delhi', 'Puducherry', 'Chandigarh', 'Ladakh'
  ];
  const previousCrops = [
    'Rice', 'Wheat', 'Sugarcane', 'Cotton', 'Maize', 'Soybean', 
    'Pulses', 'Groundnut', 'Barley', 'Millets', 'Tobacco', 
    'Mustard', 'Sunflower', 'Chickpea', 'Sorghum', 'Oilseeds', 
    'Vegetables', 'Fruits', 'Tea', 'Coffee', 'Spices', 
    'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage', 
    'Cauliflower', 'Pumpkin', 'Ginger', 'Garlic', 'Turmeric',
    'Peas', 'Carrot', 'Radish', 'Eggplant', 'Bitter Gourd', 
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const processedData = { soil_type: soilType, season, location, previous_crop: previousCrop, budget };

    setLoading(true);
    setResponseTime(null);

    const startTime = Date.now();

    try {
      const response = await fetch('https://agrisense-bd.onrender.com/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(processedData),
      });

      if (!response.ok) throw new Error('Failed to fetch recommendation');

      const result = await response.json();
      setCrops(result.crops);
      setFertilizers(result.fertilizers);
      setError(null);

      const duration = Date.now() - startTime;
      setResponseTime(duration);
    } catch (err) {
      setError(err.message);
      setCrops(null);
      setFertilizers(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />

      <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-24 border border-green-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
          Crop Rotation & Fertilizer Recommendation
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">

          {/* Dropdowns */}
          {[{label: 'Soil Type', value: soilType, setter: setSoilType, options: soilTypes},
            {label: 'Season', value: season, setter: setSeason, options: seasons},
            {label: 'Location', value: location, setter: setLocation, options: locations},
            {label: 'Previous Crop', value: previousCrop, setter: setPreviousCrop, options: previousCrops}]
          .map((field, idx) => (
            <div key={idx}>
              <label className="block mb-2 font-medium text-gray-700">{field.label}:</label>
              <select
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="" disabled>Select {field.label}</option>
                {field.options.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          {/* Budget */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Budget (Allocated):</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Min 5000"
              min="5000"
              max="5000000"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Get Recommendation'}
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-6 p-4 bg-red-100 rounded-xl border border-red-400 text-red-700 shadow-inner">
            Error: {error}
          </div>
        )}

        {/* Recommendations */}
        {crops && (
          <div className="mt-6 p-4 bg-green-100 rounded-xl border border-green-400 shadow-inner">
            <h3 className="font-semibold text-green-700 mb-2">Recommended Crops:</h3>
            {crops.split('\n').map((crop, index) => <p key={index}>{crop}</p>)}
          </div>
        )}

        {fertilizers && (
          <div className="mt-6 p-4 bg-blue-100 rounded-xl border border-blue-400 shadow-inner">
            <h3 className="font-semibold text-blue-700 mb-2">Recommended Fertilizers:</h3>
            {fertilizers.split('\n').map((fertilizer, index) => <p key={index}>{fertilizer}</p>)}
          </div>
        )}

        {/* Response Time */}
        {responseTime !== null && (
          <div className="mt-4 p-3 bg-yellow-100 rounded-xl border border-yellow-400 text-yellow-700 shadow-inner text-center">
            Fetched in: {(responseTime / 1000).toFixed(2)} seconds
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="mt-12">
        <section className="cta bg-green-300 py-6 text-center rounded-t-xl shadow-inner">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-semibold text-green-900 mb-2">Join Our Farming Community</h2>
            <p className="text-green-800 mb-4">
              Get the latest updates on crop trends, farming techniques, and expert advice.
            </p>
            <hr className="border-green-900 opacity-40 mb-2" />
            <p className="text-green-900 text-sm">&copy; 2025 Beeja. All rights reserved.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
