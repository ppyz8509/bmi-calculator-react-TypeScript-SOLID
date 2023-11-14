import React, { useState } from 'react';
import './App.css';

interface BMIForm {
  height: number;
  weight: number;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<BMIForm>({ height: 0, weight: 0 });
  const [bmi, setBMI] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof BMIForm) => {
    setFormData({ ...formData, [field]: parseFloat(e.target.value) || 0 });
  };

  const calculateBMI = () => {
    const { height, weight } = formData;
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={formData.height}
          onChange={(e) => handleInputChange(e, 'height')}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={formData.weight}
          onChange={(e) => handleInputChange(e, 'weight')}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div>
          <h2>Your BMI: {bmi.toFixed(2)}</h2>
          <p>
            Interpretation:
            {bmi < 18.5
              ? 'Underweight'
              : bmi < 24.9
              ? 'Normal weight'
              : bmi < 29.9
              ? 'Overweight'
              : 'Obese'}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
