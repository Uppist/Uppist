/** @format */

import AboutUs from "./components/Aboutus/AboutUs";
import Contactus from "./components/Contactus/Contactus";
import { HashRouter, Routes, Route } from "react-router-dom";
import HeadoveSection from "./components/Headove/headoveSection";
import StunLearn from "./components/StunLearn/StunLearn";
import Luround from "./components/Luround/Luround";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path='/' element={<AboutUs />} />
          <Route path='headove' element={<HeadoveSection />} />
          <Route path='contact' element={<Contactus />} />

          <Route path='stunlearn' element={<StunLearn />} />

          {/* <Route path='luround' element={<Luround />} /> */}
        </Routes>
      </div>
    </HashRouter>
  );
}
