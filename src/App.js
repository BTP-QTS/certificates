import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Certi_of_Origin from "./components/Certi_of_Origin";
import Phytosanitary from "./components/Phytosanitary";

function App() {
  return (
    <div style={{margin:"20px",padding:"20px"}}>
     
      
      <Routes>
        <Route path="/" element={<Certi_of_Origin/>} />
        <Route path="phyto" element={<Phytosanitary/>} />
      </Routes>
    </div>
  );
}

export default App