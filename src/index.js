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

      $('.score').text(player.score);

      $(".playerCode").text("");

      return true;
    }

    function charCheck(joinedArr){
      console.log(player.difficulties);
      for (let i = 0; i < joinedArr.length; i++){
        if(code.charAt(i) != joinedArr.charAt(i) && player.health > 1){
          $(".laserShotAnimation").css("animation-delay","-2s");
          playerLetters = [];
          player.health -= 1;
          // player.difficulties.shift();
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
        } else if (code.charAt(i) != joinedArr.charAt(i)) {
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
          $(".playerCode").text("");
        }
      }
    }
    charCheck(playerCode);

    function checkLevel() {
      if (player.score === 5) {
        $(".level").text("May the schwartz be with you");
      } else if (player.score === 10) {
        console.log('Difficulty 3');
        $(".level").text("You still don't understand what you're dealing with...");
      } else if (player.score === 15) {
        $(".level").text("No weapons! No tricks! Just you and me!");
        console.log('Difficulty 4');
      } else if (player.score === 20) {
        $(".level").text("Kill....me! Ripelyyy");
        console.log('Difficulty 5');
      } else if (player.score === 25){
        $('.gradient').hide();
        $('#winner').fadeIn();
        console.log('You Win!');
      } else {
        console.log('Game ongoing');
      }
    }
    checkLevel();

    function gameOver(){
      if (player.difficulties.length === 0 && player.health < 1){
        $('.gradient').hide();
        $('#gameOver').fadeIn();
      } else if(player.health === 2){
        $('#three-hearts').hide();
      } else if (player.health === 1){
        $('#two-hearts').hide();
      } else if(player.health < 1){
        $('one-heart').hide();
        $('.gradient').hide();
        $('#gameOver').fadeIn();
      }
      // console.log(player.health);
    }
    gameOver();
  });

  // DELAY ON STARTING ANIMATIONS
  setTimeout(function() {
    $(".playerShipAnimationRight").css("animation-delay","0s");
    $(".playerShipAnimationLeft").css("animation-delay","0s");

    $(".laserShotAnimation").css("animation-delay","0s");
  }, 2000);
});
