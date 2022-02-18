import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Files
import Home from "./components/home/allFiles/index";
import ConsumerRegister from "./components/consumer-register/allFiles/index";
import ProducerRegister from "./components/producer-register/allFiles/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cadastro-consumidor" element={ <ConsumerRegister /> } />
        <Route path="/cadastro-produtor" element={ <ProducerRegister /> } />
      </Routes>
    </Router>
  )
}

export default App;
