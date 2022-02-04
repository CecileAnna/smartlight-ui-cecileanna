import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { motion } from "framer-motion";
import BedLights from "./pages/bedroom-lights";
import DeskLights from "./pages/desk-lights";
import MainLight from "./pages/main-light";
import Header from "./templates/Header";
import NavbarMain from "./templates/NavbarMain";
import NavbarBottom from "./components/NavbarBottom";
import Home from "./pages/home";
import MainContentWrapper from "./subcomponents/MainContentWrapper";


function App() {
  return (

    <BrowserRouter>

      <div className="App">

        <Header titleText="Control Panel">

        </Header>


        <MainContentWrapper>

          <NavbarMain/>

          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/main-light" element={<MainLight/>}/>
            <Route path="/desk-lights" element={<DeskLights/>}/>
            <Route path="/bed-lights" element={<BedLights/>}/>

          </Routes>

        </MainContentWrapper>

        <NavbarBottom/>

      </div>

    </BrowserRouter>
  );
}

export default App;
