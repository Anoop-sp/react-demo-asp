import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF1cXGBCf1NpQ3xbf1x0ZFFMYFhbQHFPIiBoS35RckVqWXlfdnVRRmFYUEd0"
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
