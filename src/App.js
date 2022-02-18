import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";

//Import Files
import Home from "./components/home/allFiles/index";
import ConsumerRegister from "./components/consumer-register/allFiles/index";
import ProducerRegister from "./components/producer-register/allFiles/index";

function App() {

  //useEffect(() => {
  //  Axios.get("http://localhost:3333/all/user/producer")
    //.then(request => request.json())
    //.then(respost => console.log(respost))
  //}, [])

  useEffect( async () => {
    const request = await fetch("http://localhost:3333/all/user/producer");
    const json = await request.json();
    const dataOne = json.data[0];

    console.log(dataOne.pdc_first_name);
  }, [])

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
