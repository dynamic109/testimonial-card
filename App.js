import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import data from "./data.json";

function App() {
  const [userData, setUserData] = useState(data);
  return (
    <div className="container">
      <Card userData={userData} />
    </div>
  );
}

export default App;
