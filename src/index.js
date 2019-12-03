import { Player } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  let player = new Player();
  let code = player.generateCode();
  $('.invaderCode').text(code);
  let playerLetters = [];
  $("#userInput").keyup(function () {
    playerLetters.push($("#userInput").val());
    $("#userInput").val("");
    let playerCode = playerLetters.join('');
    $(".playerShip").text(`${playerCode}`);

    for (let i = 0; i < playerCode.length; i++) {
      // console.log(playerCode.length);
      if (code.charAt(i) != playerCode.charAt(i)) {
        console.log('Game Over!');
      }
    }

    // console.log(playerCode);
    if (playerCode === code) {
      $(".invaderCodeR").fadeToggle(1500);
      // $(".playerShipL").fadeToggle(1500);
      $(".laserShotL").fadeToggle(200);
      $(".laserShotR").fadeToggle(200);
      $(".invaderCodeL").fadeToggle(1500);
      // $(".playerShipR").fadeToggle(1500);
      $(".laserShotL").fadeToggle(2000);
      $(".laserShotR").fadeToggle(2000);
      $(".playerShip").toggleClass("playerShipAnimationRight");
      $(".playerShip").toggleClass("playerShipAnimationLeft");
      // $(".playerShip").removeClass("playerShipAnimationRight");
      // $(".playerShip").removeClass("playerShipAnimationLeft");
      // setTimeout($(".playerShip").removeClass("playerShipAnimationLeft"), 4.0*1000)
      // setTimeout(function() {
      //   $('.playerShip').removeClass('playerShipAnimationRight playerShipAnimationLeft');
      // }, 1000);

      playerLetters = [];
      player.score += 1;
      player.checkScore(player.score);
      // console.log(player.randomCode());
    }
    console.log('Score: ', player.score);
  });
});
