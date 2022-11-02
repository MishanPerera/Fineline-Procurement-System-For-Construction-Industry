import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

import PurchaseOrder from "./components/PurchaseOrder";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/purchase-order" element={<PurchaseOrder/>}/>
      <Route path="/" element={<Navbar/>}/>
      </Routes>
    </Router>
        
  );
}

export default App;
