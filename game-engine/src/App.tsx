import React, { useState, useEffect } from "react";
import "./App.css";
import { PlayerController } from "./game/PlayerController";

function App() {
    new PlayerController().start();

    return <div id="center-div"></div>;
}

export default App;
