import React, { useEffect } from "react";
import { log } from "./middleware/logger";
import Form from "./components/Form";

function App() {
  useEffect(() => {
    log("frontend", "info", "App", "App mounted");
  }, []);

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <Form />
    </div>
  );
}

export default App;
