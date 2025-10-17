# fertilizer.py

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt

# 1. Load CSV data
data = pd.read_csv("crop_data.csv")  # CSV file with your data

# Columns:
# temperature,moisture,humidity,phLevel,soilType,season,location,previousCrop,budget,disease

# 2. Encode categorical features
categorical_cols = ['soilType', 'season', 'location', 'previousCrop']
label_encoders = {}

for col in categorical_cols:
    le = LabelEncoder()
    data[col] = le.fit_transform(data[col])
    label_encoders[col] = le

# Encode target (disease)
target_le = LabelEncoder()
data['disease'] = target_le.fit_transform(data['disease'])

# 3. Show disease distribution
plt.figure(figsize=(8,5))
disease_counts = data['disease'].value_counts()
plt.bar(target_le.inverse_transform(disease_counts.index), disease_counts.values, color='green')
plt.title("Disease Distribution in Dataset")
plt.xlabel("Disease")
plt.ylabel("Count")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# 4. Split data (no stratify due to small dataset)
X = data.drop('disease', axis=1)
y = data['disease']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 5. Train Random Forest Classifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 6. Predict & evaluate
y_pred = model.predict(X_test)

labels = list(range(len(target_le.classes_)))
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Classification Report:\n", classification_report(
    y_test, y_pred, labels=labels, target_names=target_le.classes_
))

# 7. Visualize predicted vs actual on test set
plt.figure(figsize=(8,5))
actual_counts = pd.Series(y_test).value_counts()
pred_counts = pd.Series(y_pred).value_counts()
width = 0.35
plt.bar([x - width/2 for x in actual_counts.index], actual_counts.values, width=width, label='Actual', color='blue')
plt.bar([x + width/2 for x in pred_counts.index], pred_counts.values, width=width, label='Predicted', color='orange')
plt.xticks(range(len(target_le.classes_)), target_le.classes_, rotation=45)
plt.title("Predicted vs Actual Disease Counts")
plt.ylabel("Count")
plt.legend()
plt.tight_layout()
plt.show()

# 8. Function to predict new data
def predict_disease(new_data):
    df = pd.DataFrame([new_data])
    for col in categorical_cols:
        if df[col][0] not in label_encoders[col].classes_:
            raise ValueError(f"Unknown category '{df[col][0]}' in column '{col}'")
        df[col] = label_encoders[col].transform(df[col])
    
    pred = model.predict(df)[0]
    disease_name = target_le.inverse_transform([pred])[0]
    return disease_name

# 9. Function to get user input at runtime
def get_user_input():
    print("Enter the following details to predict the crop disease:")
    
    temperature = float(input("Temperature (°C): "))
    moisture = float(input("Moisture (%): "))
    humidity = float(input("Humidity (%): "))
    phLevel = float(input("pH Level: "))
    
    # Categorical options
    soil_options = ['Loamy','Clay','Sandy','Silty','Peaty','Chalky']
    season_options = ['Kharif','Rabi','Zaid']
    location_options = [
        'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh',
        'Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha',
        'Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Delhi',
        'Jammu & Kashmir','Ladakh','Puducherry','Chandigarh','Dadra & Nagar Haveli and Daman & Diu','Andaman & Nicobar Islands',
        'Lakshadweep'
    ]
    previous_crop_options = ['Wheat','Rice','Maize','Vegetables','Pulses','Other']

    # Helper function for validation
    def choose_option(prompt, options):
        while True:
            val = input(f"{prompt} {options}: ")
            if val in options:
                return val
            else:
                print("Invalid choice. Please select from the list.")

    soilType = choose_option("Soil Type", soil_options)
    season = choose_option("Season", season_options)
    location = choose_option("Location (State of India)", location_options)
    previousCrop = choose_option("Previous Crop", previous_crop_options)
    
    budget = float(input("Budget (INR): "))

    return {
        'temperature': temperature,
        'moisture': moisture,
        'humidity': humidity,
        'phLevel': phLevel,
        'soilType': soilType,
        'season': season,
        'location': location,
        'previousCrop': previousCrop,
        'budget': budget
    }

# 10. Main runtime
if __name__ == "__main__":
    user_input = get_user_input()
    predicted_disease = predict_disease(user_input)
    print("\nPredicted Disease:", predicted_disease)
