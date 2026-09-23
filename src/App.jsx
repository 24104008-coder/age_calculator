import { useState } from "react";

function App() {
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const year = Number(birthYear);

    if (year > 0 && year <= currentYear) {
      setAge(currentYear - year);
    } else {
      setAge(null);
      alert("Please enter a valid birth year.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculate Age</h1>

      <input
        type="number"
        placeholder="Enter birth year"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />

      <button onClick={calculateAge}>Calculate Age</button>

      {age !== null && <h2>Your age is {age} years</h2>}
    </div>
  );
}

export default App;