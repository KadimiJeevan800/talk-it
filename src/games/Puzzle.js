import React, { useState } from "react";
import "./style.scss";
import ironman from "../images/iron-man.jpg";

import Confetti from "react-confetti";
export default function Puzzle() {
  var rand = Math.floor(Math.random() * 5);
  const [won, setWon] = useState(0);
  var flag=0;
  const [fla,setFla]=useState("Start");
  var count = 0;
  function check(id) {
    var data = document.getElementById("c" + id).innerText;
    console.log(data);
   
   
    if (data !== "Nothing") {
      console.log("You won");
      setWon(1);
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
  }

  // function game() {
  //   // window.location.reload(false)
  //   document.getElementById("text").innerText = "Play";
  //   var card = document.getElementById("card0");
  //   var card1 = document.getElementById("card1");
  //   var card2 = document.getElementById("card2");
  //   var card3 = document.getElementById("card3");

  //   card.addEventListener("click", function () {
  //     card.classList.toggle("is-flipped");
  //   });

  //   card1.addEventListener("click", function () {
  //     card1.classList.toggle("is-flipped");
  //   });
  //   card2.addEventListener("click", function () {
  //     card2.classList.toggle("is-flipped");
  //   });
  //   card3.addEventListener("click", function () {
  //     card3.classList.toggle("is-flipped");
  //   });
  //   // document.getElementById('c'+rand).innerText="Cat";
  //   document.getElementById(
  //     "c" + rand
  //   ).innerHTML = `<img src=${ironman} width="100px" height="100px" />`;
  // }
  // game();
  // setTimeout(() => game(), 1000);
  // await sleep(3000);

  function fun(id)
  {
    if(flag===0)
    {
      document.getElementById(
        "c" + rand
      ).innerHTML = `<img src=${ironman} width="100px" height="100px" />`;
      // eslint-disable-next-line no-const-assign
      flag=1;
    }
    count++;
    if (count > 3) {
      alert("Chances are Over");
      window.location.reload(false);
      setFla("Game Over");

      // return
    }
 
    check(id);
    var card = document.getElementById("card"+id);
      card.classList.toggle("is-flipped");   
   
  }
  return (
    <div style={{ textAlign: "center" }}>
      {won === 0 ? "" : <Confetti />}

      <h2 style={{color:"brown"}}>
        {fla}
      </h2>
      {/* <h2 id="text" style={{ color: "brown" }}>
        Game Paused{" "}
      </h2>
      <button onClick={() => game()} className="button">
        Re-Start
      </button> */}
      <h3 style={{ textAlign: "center", color: "green" }}>
        Find the Iron Man ?
      </h3>
      <p style={{ textAlign: "center", color: "blue" }}>
        Only 3 Chances per Game...
      </p>
      {/* <h4 style={{ textAlign: "center", color: "red" }}>
        Click on Restart button Before you play the Paused game...
      </h4> */}
      <div class="scene scene--card">
        <div class="card" id="card1" onClick={() => fun(1)}>
          <div class="card__face card__face--front">1</div>
          <div class="card__face card__face--back" id="c1">
            Nothing
          </div>
        </div>
      </div>

      <div class="scene scene--card">
        <div class="card" id="card2" onClick={() => fun(2)}>
          <div class="card__face card__face--front">2</div>
          <div class="card__face card__face--back" id="c2">
            Nothing
          </div>
        </div>
      </div>

      <div class="scene scene--card">
        <div class="card" id="card3" onClick={() => fun(3)}>
          <div class="card__face card__face--front">3</div>
          <div class="card__face card__face--back" id="c3">
            Nothing
          </div>
        </div>
      </div>

      <div class="scene scene--card">
        <div class="card" id="card4" onClick={() => fun(4)}>
          <div class="card__face card__face--front">4</div>
          <div class="card__face card__face--back" id="c4">
            Nothing
          </div>
        </div>
      </div>

      <div class="scene scene--card">
        <div class="card" id="card5" onClick={() => fun(5)}>
          <div class="card__face card__face--front">5</div>
          <div class="card__face card__face--back" id="c5">
            Nothing
          </div>
        </div>
      </div>

    </div>
  );
}