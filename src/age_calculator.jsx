import { useState } from "react";

function AgeCalculator() {
  const [birthYear, setBirthYear] = useState("");
  const currentYear = new Date().getFullYear();

  const age = birthYear ? currentYear - Number(birthYear) : null;

  return (
    <div>
      <h2>Age Calculator</h2>

      <input
        type="number"
        placeholder="Enter birth year"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />

      {age !== null && age >= 0 && (
        <p>You are {age} years old.</p>
      )}
    </div>
  );
}

export default AgeCalculator;
