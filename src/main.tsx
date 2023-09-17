import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import EmployeeChangeProvider from "./provider/EmployeeChangeProvider.tsx";
import SearchProvider from "./provider/SearchProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>
  <EmployeeChangeProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </EmployeeChangeProvider>
  //</React.StrictMode>
);
