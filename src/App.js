import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { motion } from "framer-motion";
// import BedLights from "./pages/bedroom-lights";
// import DeskLights from "./pages/desk-lights";
// import MainLight from "./pages/main-light";
import Header from "./templates/Header";
// import NavbarMain from "./templates/NavbarMain";
import NavbarBottom from "./components/NavbarBottom";
// import Home from "./pages/home";
// import MainContentWrapper from "./subcomponents/MainContentWrapper";
import MainContent from "./subcomponents/MainContent";


function App() {

  return (

    <BrowserRouter>

      <div className="App bg-main-blue">

         <Header titleText="Control Panel"/>



      


          <Routes>

            <Route path="/" element={ <MainContent/>}/>
            {/* <Route path="/main-light" element={<MainLight/>}/>
            <Route path="/desk-lights" element={<DeskLights/>}/>
            <Route path="/bed-lights" element={<BedLights/>}/> */}

          </Routes>

        <NavbarBottom/>

      </div>
    
    </BrowserRouter>

  );
}

export default App;
