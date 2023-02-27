import "./App.css";
import Showdata from "./components/Showdata";
import Showdata1 from "./components/Showdata1";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Ref1 from "./Hooks/Ref_prac";
import Red from "./Hooks/Reducer";
import Sde from "./Class-comp/side-effect";
import Context from "./Hooks/Context/Context.js";
import NavPar from "./Route/Navlink_param";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function VApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/showdata1/" element={<Showdata1 />} />
          <Route path="/showdata/" element={<Showdata />}></Route>
          {/* <Route path="/*" element={<Task1 />}></Route> */}
          <Route exact path="/Task2/" element={<Task2 />}>
            <Route exact path="Task1" element={<Task1 />} ></Route>
          </Route>
          <Route path="/Nav/:name" element={<NavPar />}></Route>
          <Route path="/Ref1" element={<Ref1 />} />
          <Route path="/Red" element={<Red />} />
          <Route path="/Sde" element={<Sde />} />
          <Route path="/*" element={<Context />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VApp;
