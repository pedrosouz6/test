import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";

//Import Files
import Home from "./components/home/allFiles/index";
import ConsumerRegister from "./components/consumer-register/allFiles/index";
import ProducerRegister from "./components/producer-register/allFiles/index";
import Producer from "./components/producer/allFiles/index";

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cadastro-consumidor" element={ <ConsumerRegister /> } />
        <Route path="/cadastro-produtor" element={ <ProducerRegister /> } />
        <Route path="/produtor" element={ <Producer /> } />
      </Routes>
    </Router>
  )
}

export default App;
