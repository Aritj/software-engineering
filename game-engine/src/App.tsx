import React, { useState, useEffect } from 'react';
import './App.css';
import { InputSystem } from './engine/InputSystem';

export function initialize() {

  InputSystem.add("w", moveUp);
  InputSystem.add("a", moveLeft);
  InputSystem.add("s", moveDown);
  InputSystem.add("d", moveRight);
  // no implementation for move "x" on purpose for testing purposes


  function moveUp() {
    new Audio("swoosh.mp3").play();
    console.log("UP!");
  }

  function moveDown() {
    console.log("DOWN!");
  }

  function moveLeft() {
    console.log("LEFT!");
  }

  function moveRight() {
    console.log("RIGHT!");
  }

}

function App() {

  initialize();
  
  return (
    <div id='center-div'></div>
  );
}

export default App;
