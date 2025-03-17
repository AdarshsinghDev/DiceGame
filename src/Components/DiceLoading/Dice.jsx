import React from "react";
import "./Dice.css";
import dice from "../../assets/dice.png";

function Dice({toggle}) {
  
  return (
    <main>
      <div className="container h-100">
        <div className="dice-img">
          <img src={dice} alt="dice" />
        </div>

        <div className="dice-text">
          <h1>Welcome to the Dice Game Are You Ready to Roll?</h1>
          <div className="btn">
            <button onClick={toggle}>Play Now!</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dice;
