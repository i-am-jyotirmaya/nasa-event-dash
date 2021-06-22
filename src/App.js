import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { NasaEvents } from "./components/nasa-events/nasa-events";

function App() {
    return (
        <React.Fragment>
            <NasaEvents />
        </React.Fragment>
    );
}

export default App;
