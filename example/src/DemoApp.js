import React, { useEffect, useState } from "react";

import CustomizedBar from "./CustomizedBar";
import ProgressBar from "@asyrafhussin/react-progress-bar";

const DemoApp = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="App">
      <h3>Randomly generated completed value</h3>
      <ProgressBar completed={completed} />
      <hr />
      <h3>Interactive Generator</h3>
      <CustomizedBar />
      <div style={{ marginTop: "100px" }}></div>
    </div>
  );
};

export default DemoApp;
