import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { motion } from "framer-motion";

import BedroomLights from "./pages/BedroomLights";
// import LivingroomLights from "./pages/livingroom-ligths";
// import KitchenLights from "./pages/kitchen-lights";
// import BathroomLights from "./pages/bathroom-lights";
// import OutdoorLights from "./pages/outdoor-lights";
// import BalconyLights from "./pages/balcony-lights";

// import Header from "./templates/Header";
// import NavbarMain from "./templates/NavbarMain";
import NavbarBottom from "./components/NavbarBottom";
// import Indstillinger from "./pages/Indstillinger";
// import Home from "./pages/home";
// import MainContentWrapper from "./subcomponents/MainContentWrapper";
import MainContent from "./subcomponents/MainContent";
// import ErrorBoundary from "./ErrorBoundary";
//import * as Sentry from "@sentry/react";
//import HeadingOne from "./subcomponents/HeadingOne";

function App() {
  // if(true) {
  //   throw new Error('Oh damn!');
  // }

  return (
    <BrowserRouter>
      <div className="App bg-main-blue">
        <Routes>
          <Route
            path="/"
            element={
              //<Sentry.ErrorBoundary fallback={<HeadingOne text="Oh oh, nonono - NO!"/>}>

              <MainContent />

              //</Sentry.ErrorBoundary>
            }
          />

          <Route path="BedroomLights" element={<BedroomLights />} />

          {/* <Route path="/livingroom-lights" element={<LivingroomLights/>}/>
              <Route path="/kitchen-lights" element={<KitchenLights/>}/>
              <Route path="/bathroom-lights" element={<BathroomLights/>}/>
              <Route path="/outdoor-lights" element={<OutdoorLights/>}/>
              <Route path="/balcony-lights" element={<BalconyLights/>}/> */}
        </Routes>

        <NavbarBottom />
      </div>
    </BrowserRouter>
  );
}

export default App;
