import { BrowserRouter, Routes, Route } from "react-router-dom";

import style from "./App.module.css";

import Navbar from "./Components/Navbar/Navbar";
import Start from "./Components/Start/Start";
import Characters from "./Components/Characters/Characters";
import Locations from "./Components/Locations/Locations";
import Episodes from "./Components/Episodes/Episodes";

export default function App() {
    return (
        <div className={style.app}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={"/"} exact element={<Start/>}/>
                    <Route path={"/characters"} element={<Characters/>}/>
                    <Route path={"/locations"} element={<Locations/>}/>
                    <Route path={"/episodes"} element={<Episodes/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}