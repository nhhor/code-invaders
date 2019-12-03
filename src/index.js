import { Player } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let player = new Player ();
  let word = player.generateWord();
  let playerLetters = [];
  $('.invaderWord').text(word);

  $("#userInput").keyup(function() {
    playerLetters.push($("#userInput").val());
    let playerWord = playerLetters.join('');

    console.log(playerLetters);
    $(".playerShip").text(playerWord);
    $("#userInput").val("");


    // $(".playerShip").

    if (playerWord === word) {
      $(".invaderWordR").fadeToggle(1500);
      // $(".playerShipL").fadeToggle(1500);
      $(".laserShotL").fadeToggle(200);
      $(".laserShotR").fadeToggle(200);
      $(".invaderWordL").fadeToggle(1500);
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
    }


  });
});
