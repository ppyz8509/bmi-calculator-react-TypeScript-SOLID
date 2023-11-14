// src/components/BMICalculatorForm.tsx
import React from 'react';

interface BMICalculatorFormProps {
  height: number;
  weight: number;
  setHeight: (height: number) => void;
  setWeight: (weight: number) => void;
  calculateBMI: () => void;
}

export const BMICalculatorForm: React.FC<BMICalculatorFormProps> = ({
  height,
  weight,
  setHeight,
  setWeight,
  calculateBMI,
}) => {
  return (
    <form>
      <label>
        Height (cm):
        <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
      </label>
      <br />
      <button type="button" onClick={calculateBMI}>
        Calculate BMI
      </button>
    </form>
  );
};
