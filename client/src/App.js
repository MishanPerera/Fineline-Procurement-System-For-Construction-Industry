import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PurchaseOrder from "./components/PurchaseOrder";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PurchaseOrder/>}/>
      </Routes>
    </Router>
        
  );
}

export default App;
