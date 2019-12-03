import { Player } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let playerLetters = [];

  $("#userInput").keyup(function() {
    playerLetters.push($("#userInput").val());
    $("#userInput").val("");
    let playerCode = playerLetters.join('');
    $(".playerShip").text(`${playerCode}`);

    for(let i = 0; i < playerCode.length; i++){
      // console.log(playerCode.length);
      if (code.charAt(i) != playerCode.charAt(i)) {
        console.log('Game Over!');
      }
    }

  console.log(playerCode);
  if(playerCode === code){
    // console.log('Score 1: ', player.score);
    player.score += 1;
  }
  console.log('Score 2: ', player.score);
  });
});

// NEW
let player = new Player ();
let code = player.generateCode();
$('.invaderCode').text(code);
