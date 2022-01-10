import React from "react";
import { NavBar } from "./screens/NavBar";
import { Features } from "./screens/Features";
import { Info } from "./screens/Info";
import { AppScreen } from "./screens/AppScreen";
import { Plans } from "./screens/Plans";
import { About } from "./screens/About";

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
