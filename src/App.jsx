import React from "react";
import { NavBar } from "./components/NavBar";
import { Features } from "./components/Features";
import { Info } from "./components/Info";
import { AppScreen } from "./components/AppScreen";
import { Plans } from "./components/Plans";
import { About } from "./components/About";

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Features />
            <Info />
            <AppScreen />
            <Plans />
            <About />
        </div>
    );
}

export default App;
