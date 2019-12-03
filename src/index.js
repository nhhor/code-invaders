import { Player } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let player = new Player ();
  let code = player.generateCode();
  $('.invaderCode').text(code);
  let playerLetters = [];
  $("#userInput").keyup(function() {
    playerLetters.push($("#userInput").val());
    $("#userInput").val("");
    let playerCode = playerLetters.join('');
    $(".playerCode").text(playerCode);

    for(let i = 0; i < playerCode.length; i++){
      // console.log(playerCode.length);
      if (code.charAt(i) != playerCode.charAt(i)) {
        console.log('Game Over!');
      }
    }

    console.log(playerCode);
    if(playerCode === code){

      setTimeout(function() {
        $(".invaderCodeR").fadeToggle(200);
        $(".invaderCodeL").fadeToggle(200);
      }, 1000);

      $(".laserShotL").toggleClass("laserShotAnimation");
      $(".laserShotR").toggleClass("laserShotAnimation");
      $(".playerShip").toggleClass("playerShipAnimationRight");
      $(".playerShip").toggleClass("playerShipAnimationLeft");
      // $(".playerShip").removeClass("playerShipAnimationRight");
      // $(".playerShip").removeClass("playerShipAnimationLeft");

      // setTimeout(function() {
        //     $('.playerShip').removeClass('playerShipAnimationRight playerShipAnimationLeft');
        //   }, 1000);

        playerLetters = [];
        player.score += 1;
      }
      console.log('Score 2: ', player.score);
    });
  });
