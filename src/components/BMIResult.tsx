// src/components/BMIResult.tsx
import React from 'react';

interface BMIResultProps {
  bmi: number | null;
}

export const BMIResult: React.FC<BMIResultProps> = ({ bmi }) => {
  return (
    <div>
      {bmi !== null && (
        <p>
          Your BMI is: <strong>{bmi.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
};
