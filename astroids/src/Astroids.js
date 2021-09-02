import React, { Component } from 'react';

import './App.css';

class Astroids extends Component {
  constructor(props){
    super(props);


    const FPS = 30;

    // html canvas
    var canv = document.getElementById("astroids");
    var ctx = canv.getContext("2d");

    setInterval(update, 1000 / FPS)

    function update(){
      // draw space 
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canv.width, canv.height)
      // draw ship

      // rotate ship

      // move ship


    }
  }



  render(){
      return (
      <div className="App">
        <header className="App-header">
          Astroids JS
        </header>


        <canvas id="astroids" width="700" height="500">

        </canvas>

      </div>
    );
  }
}

export default Astroids;
