import React, { useState } from 'react'
import './style.scss'
import ironman from '../images/iron-man.jpg';

import Confetti from 'react-confetti'
export default function Puzzle() {
  var rand=Math.floor(Math.random() * 4);
  const [won,setWon]=useState(0);
  var count=0;
 function check(id)
 {
   var data=document.getElementById('c'+id).innerText;
   console.log(data);
   count++;
   if(count>2)
   {
    alert("Chances are Over");
    window.location.reload(false)
   }
   if(data!=='Nothing')
   {
    console.log("You won");
    setWon(1);
    setTimeout(()=>{window.location.reload(false)
      
    },3000)
   }
  
 }
  
  function game()
  {
    document.getElementById('text').innerText="Play";
    var card = document.getElementById('card0');
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');
    var card3 = document.getElementById('card3');
   
    card.addEventListener( 'click', function() {
      card.classList.toggle('is-flipped');
    });
    card1.addEventListener( 'click', function() {
      card1.classList.toggle('is-flipped');
    });
    card2.addEventListener( 'click', function() {
      card2.classList.toggle('is-flipped');
    });
    card3.addEventListener( 'click', function() {
      card3.classList.toggle('is-flipped');
    });
    // document.getElementById('c'+rand).innerText="Cat";
    document.getElementById('c'+rand).innerHTML=`<img src=${ironman} width="100px" height="100px" />`;
  }
  // game();
  // setTimeout(game(),1000);
  return (
    <div style={{textAlign:"center"}}>
      {
        won===0 ? "" :  <Confetti/>
      }
      
      <h2 id='text' style={{color:"brown"}}>Game Paused </h2> 
      <button onClick={()=>(game())} className="button" >Re-Start</button>
      <h3 style={{textAlign:"center",color:'green'}}>Find the Iron Man ?</h3>
      <p style={{textAlign:"center",color:'blue'}}>Only 2 Chances per Game...</p>
      <h4 style={{textAlign:"center",color:'red'}}>Click on Restart button Before you play the Paused game...</h4>
<div class="scene scene--card">
  <div class="card" id='card0' onClick={()=>(check(0))}>
    <div class="card__face card__face--front">1</div>
    <div class="card__face card__face--back" id='c0'>Nothing</div>
  </div>
</div>

<div class="scene scene--card">
  <div class="card" id='card1' onClick={()=>(check(1))}>
    <div class="card__face card__face--front">2</div>
    <div class="card__face card__face--back" id='c1'>Nothing</div>
  </div>
</div>

<div class="scene scene--card">
  <div class="card" id='card2'  onClick={()=>(check(2))}>
    <div class="card__face card__face--front">3</div>
    <div class="card__face card__face--back" id='c2'>Nothing</div>
  </div>
</div>

<div class="scene scene--card">
  <div class="card" id='card3'  onClick={()=>(check(3))}>
    <div class="card__face card__face--front">4</div>
    <div class="card__face card__face--back" id='c3'>Nothing</div>
  </div>
</div>


    </div>
  )
}
