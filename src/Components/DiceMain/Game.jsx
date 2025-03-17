import React, { useEffect, useState } from "react";
import "./Game.css";
import dice1 from "../../assets/1.png";
import dice2 from "../../assets/2.png";
import dice3 from "../../assets/3.png";
import dice4 from "../../assets/4.png";
import dice5 from "../../assets/5.png";
import dice6 from "../../assets/6.png";

function Game() {
  const [selectedDice, setSelectedDice] = useState(null);
  const [message, setMessage] = useState("Select Anyone Dice!");
  const [slideDice, setSlideDice] = useState(dice1);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [btnText, setBtnText] = useState("Start");
  const [intervalId, setIntervalId] = useState(null);
  const [score, setScore] = useState(0);
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    if (flicker) {
      document.body.classList.add("got");
      setTimeout(() => {
        document.body.classList.remove("got");
        setFlicker(false);
      }, 1000);
    }
  }, [flicker]);

  const handleSelect = (num) => {
    setSelectedDice(num);
    setMessage(`You Selected ${num}!`);
  };

  const handleStart = () => {
    if (selectedDice === null) {
      alert("Select Anyone Dice!!");
    } else {
      setBtnText((prevState) => (prevState === "Start" ? "Stop" : "Start"));

      if (btnText === "Start") {
        const id = setInterval(() => {
          let randomNum = Math.floor(Math.random() * 6) + 1;
          setSlideDice(diceImages[randomNum - 1]);
        }, 100);

        setIntervalId(id);
      } else if (btnText === "Stop") {
        let rolledDice = diceImages.indexOf(slideDice) + 1;
        if (rolledDice === selectedDice) {
          setScore((prevState) => prevState + 1);
          setFlicker(true);
        }
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  };

  const handleReset = () => {
    if (score === 0) {
      alert("Your Score is Alredy 0!");
    } else {
      window.confirm("Are you sure you want to reset your Score ?");
      if (true) {
        setScore(0);
        setMessage("Score Reseted Succesfully!");
        setSelectedDice(null);
      }
    }
  };

  return (
    <main>
      <div className="inner-main">
        <div className="container" style={{ flexDirection: "column" }}>
          <div className="score-outter">
            <div className="score">
              Score:<h1 style={{ textAlign: "center" }}>{score}</h1>
            </div>
            <div className="reset-btn">
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
          <div className="select-num">
            <h2 id="text">{message}</h2>
            <span>
              <img
                src={dice1}
                className="value-img"
                onClick={() => handleSelect(1)}
                alt="dice1"
              />
            </span>
            <span>
              <img
                src={dice2}
                className="value-img"
                onClick={() => handleSelect(2)}
                alt="dice2"
              />
            </span>
            <span>
              <img
                src={dice3}
                className="value-img"
                onClick={() => handleSelect(3)}
                alt="dice3"
              />
            </span>
            <span>
              <img
                src={dice4}
                className="value-img"
                onClick={() => handleSelect(4)}
                alt="dice4"
              />
            </span>
            <span>
              <img
                src={dice5}
                className="value-img"
                onClick={() => handleSelect(5)}
                alt="dice5"
              />
            </span>
            <span>
              <img
                src={dice6}
                className="value-img"
                onClick={() => handleSelect(6)}
                alt="dice6"
              />
            </span>
          </div>
    
          <div className="dice-num">
            <img id="diceicon" src={slideDice} alt="" />
          </div>

          <div className="start-dice">
            <button onClick={handleStart}>{btnText}</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Game;
