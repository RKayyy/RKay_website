import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Error from "./pages/Error";
import Art from "./pages/Art";
import Projects from "./pages/Projects";
import Design from "./pages/Design";


function App() {
  return (
    <div className="App">
      {/*check */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/art" element={<Art />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
