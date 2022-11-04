import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

import PurchaseOrder from "./components/PurchaseOrder";

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
      <Route path="/order" element={<PurchaseOrder/>}/>
=======
      <Route path="/purchase-order" element={<PurchaseOrder/>}/>
>>>>>>> 92341e1454c4d0b39aa899031e226da0ac470b12
      <Route path="/" element={<Navbar/>}/>
      </Routes>
    </Router>
        
  );
}

export default App;
