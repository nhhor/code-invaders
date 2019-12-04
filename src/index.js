import { Player } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import lasercannon from './sounds/laser-cannon.mp3';
const laserCannon = new Audio();
laserCannon.src = lasercannon;

import aliendeathray from './sounds/alien-death-ray.mp3';
const alienDeathRay = new Audio();
alienDeathRay.src = aliendeathray;

$(document).ready(function() {

  let player = new Player();
  player.turnCounter = 0;
  let code = player.generateCode();
  let playerLetters = [];
  $('.invaderCode').text(code);
  $("#userInput").focus();
  $("#userInput").select();

  $("#userInput").keyup(function() {

    playerLetters.push($("#userInput").val());
    $("#userInput").val("");
    let playerCode = playerLetters.join('');
    $(".playerCode").text(playerCode);

    // CORRECT CODE CONDITION
    if (playerCode === code) {

      playerLetters = [];
      player.score += 1;
      player.difficulties.shift();
      code = player.generateCode();

      $(".playerCode").text("");

      setTimeout(function() {
        $('.invaderCode').text(code);
      }, 1000);

      laserCannon.play();

      if (player.turnCounter % 2 === 0) {
        $(".laserShotL").addClass("laserShotAnimation");
        $(".playerShip").addClass("playerShipAnimationLeft");
        setTimeout(function() {
          $(".invaderCodeL").fadeOut(250);
          $(".invaderCodeR").fadeIn(250);
        }, 850);
      } else {
        $(".laserShotR").addClass("laserShotAnimation");
        $(".playerShip").addClass("playerShipAnimationRight");
        setTimeout(function() {
          $(".invaderCodeR").fadeOut(250);
          $(".invaderCodeL").fadeIn(250);
        }, 850);
      }

      setTimeout(function() {
        $(".laserShotL").removeClass("laserShotAnimation");
        $(".playerShip").removeClass("playerShipAnimationLeft");
        $(".laserShotR").removeClass("laserShotAnimation");
        $(".playerShip").removeClass("playerShipAnimationRight");
      }, 2000);

      $('.score').text(player.score);

      return player.turnCounter ++;
    }

    function charCheck(joinedArr) {
      console.log(player.difficulties);
      for (let i = 0; i < joinedArr.length; i++) {
        if(code.charAt(i) != joinedArr.charAt(i)) {

          playerLetters = [];
          player.health -= 1;

          code = player.generateCode();

          $(".playerCode").text("");

          setTimeout(function() {
            alienDeathRay.play();
          }, 500);

          if (player.turnCounter % 2 === 0) {
            $(".playerShip").addClass("playerShipAnimationRight");
          } else {
            $(".playerShip").addClass("playerShipAnimationLeft");
          }

          setTimeout(function() {
            $(".laserShotL").removeClass("laserShotAnimation");
            $(".playerShip").removeClass("playerShipAnimationLeft");
            $(".laserShotR").removeClass("laserShotAnimation");
            $(".playerShip").removeClass("playerShipAnimationRight");
          }, 2000);

          return player.turnCounter += 2;
        }
      }
    }
    charCheck(playerCode);

    function checkLevel() {
      if (player.score === 5) {
        $(".level").text("May the Schwartz be with you.");
      } else if (player.score === 10) {
        console.log('Difficulty 3');
        $(".level").text("You still don't understand what you're dealing with...");
      } else if (player.score === 15) {
        $(".level").text("No weapons! No tricks! Just you and me!");
      } else if (player.score === 20) {
        $(".level").text("Kill....me! Ripley");
      } else if (player.score === 3){
        $('.gradient').hide();
        $('#gameWon').fadeIn();
      } else {
        console.log('Game ongoing');
      }
    }
    checkLevel();

    function gameOver() {
      if (player.difficulties.length === 0 && player.health < 1) {
        $('.gradient').hide();
        $('#gameOver').fadeIn();
      } else if(player.health === 2) {
        $('#three-hearts').hide();
      } else if (player.health === 1) {
        $('#two-hearts').hide();
      } else if(player.health < 1) {
        $('one-heart').hide();
        $('.gradient').hide();
        $('#gameOver').fadeIn();
      }
    }
    gameOver();
  });
});
