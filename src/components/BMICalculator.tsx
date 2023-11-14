// src/components/BMICalculator.tsx
import React, { useState } from 'react';
import { BMICalculatorForm } from './BMICalculatorForm';
import { BMIResult } from './BMIResult';

interface BMICalculatorProps {}

const BMICalculator: React.FC<BMICalculatorProps> = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <BMICalculatorForm
        height={height}
        weight={weight}
        setHeight={setHeight}
        setWeight={setWeight}
        calculateBMI={calculateBMI}
      />
      <BMIResult bmi={bmi} />
    </div>
  );
};

export default BMICalculator;
