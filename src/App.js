import {BrowserRouter, Routes, Route} from "react-router-dom";
import { motion } from "framer-motion";
import BedLights from "./pages/bed-lights";
import DeskLights from "./pages/desk-lights";
import MainLight from "./pages/main-light";
import Header from "./templates/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/home";


function App() {
  return (

    <BrowserRouter>

      <div className="App">

      <Header>

      </Header>


      <motion.div animate={{ x: 100 }}>
        
          <h1>Animation test</h1>
        
      </motion.div>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/main-light" element={<MainLight/>}/>
        <Route path="/desk-lights" element={<DeskLights/>}/>
        <Route path="/bed-lights" element={<BedLights/>}/>

      </Routes>


      </div>

    </BrowserRouter>
  );
}

export default App;
