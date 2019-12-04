import { Player } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// AUDIO TEMPLATE FOR IMPORTING AND SET-UP
// import tick from './audio/tick.mp3';
// const tickSound = new Audio();
// tickSound.src = tick;

// AUDIO TEMPLATE FOR TRIGGER
// tickSound.play();

import lasercannon from './sounds/laser-cannon.mp3';
const laserCannon = new Audio();
laserCannon.src = lasercannon;





$(document).ready(function () {
  let player = new Player();
  let code = player.generateCode();
  $('.invaderCode').text(code);
  let playerLetters = [];
  $("#userInput").focus();
  $("#userInput").select();

  $("#userInput").keyup(function () {

    playerLetters.push($("#userInput").val());
    $("#userInput").val("");
    let playerCode = playerLetters.join('');
    $(".playerCode").text(playerCode);

    if(playerCode === code){
      $(".laserShotAnimation").css("animation-delay","0s");

      laserCannon.play();

      playerLetters = [];
      player.score += 1;
      player.checkScore(player.score);
      player.difficulties.shift();
      code = player.generateCode();

      setTimeout(function(){
        $('.invaderCode').text(code);
      }, 1000);

      setTimeout(function() {
        $(".invaderCodeR").fadeToggle(250);
        $(".invaderCodeL").fadeToggle(250);
      }, 850);

      $(".laserShotL").toggleClass("laserShotAnimation");
      $(".laserShotR").toggleClass("laserShotAnimation");
      $(".playerShip").toggleClass("playerShipAnimationRight");
      $(".playerShip").toggleClass("playerShipAnimationLeft");


      $(".playerCode").text("");

      return true;
    }

    function charCheck(joinedArr){
      for (let i = 0; i < joinedArr.length; i++){
        if (code.charAt(i) != joinedArr.charAt(i)) {
          $(".laserShotAnimation").css("animation-delay","-2s");
          playerLetters = [];
          player.health -= 1;
          player.difficulties.shift();
          code = player.generateCode();

          setTimeout(function(){
            $('.invaderCode').text(code);
          }, 1000);

          setTimeout(function() {
            $(".invaderCodeR").fadeToggle(250);
            $(".invaderCodeL").fadeToggle(250);
          }, 850);

          $(".laserShotL").toggleClass("laserShotAnimation");
          $(".laserShotR").toggleClass("laserShotAnimation");

          $(".playerShip").toggleClass("playerShipAnimationRight");
          $(".playerShip").toggleClass("playerShipAnimationLeft");


          // setTimeout(function(){
          //   $(".laserShotAnimation").css("animation-delay","0s");
          // }, 500);

          $(".playerCode").text("");

          return code;
        }
      }
    }

    charCheck(playerCode);
    
  });

  // DELAY ON STARTING ANIMATIONS
  setTimeout(function() {
    $(".playerShipAnimationRight").css("animation-delay","0s");
    $(".playerShipAnimationLeft").css("animation-delay","0s");

    $(".laserShotAnimation").css("animation-delay","0s");
  }, 2000);
});
