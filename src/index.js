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
    $(".playerCode").text(playerCode);

    console.log(playerCode);
    if(playerCode === code){
    let i = 0;
      setTimeout(function() {
        $(".invaderCodeR").fadeToggle(200);
        $(".invaderCodeL").fadeToggle(200);
      }, 1000);

      $(".laserShotL").toggleClass("laserShotAnimation");
      $(".laserShotR").toggleClass("laserShotAnimation");
      $(".playerShip").toggleClass("playerShipAnimationRight");
      $(".playerShip").toggleClass("playerShipAnimationLeft");

      playerLetters = [];
      player.score += 1;
      player.checkScore(player.score);
      console.log(player.randomCode());
      player.difficulties.shift();
      code = player.generateCode();
      $('.invaderCode').text(code);
      console.log('Score: ', player.score);
      return true;
    }
  });
});
