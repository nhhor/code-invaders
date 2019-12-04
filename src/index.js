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
  $("#userInput").focus();
  $("#userInput").select();

  $("#userInput").keyup(function () {
    playerLetters.push($("#userInput").val());
    $("#userInput").val("");
    let playerCode = playerLetters.join('');
    $(".playerCode").text(playerCode);

    function charCheck(joinedArr){
      for (let i = 0; i < joinedArr.length; i++){
        if (code.charAt(i) != joinedArr.charAt(i)) {
          player.difficulties.shift();
          code = player.generateCode();

    function charCheck(joinedArr){
      for (let i = 0; i < joinedArr.length; i++){
        if (code.charAt(i) != joinedArr.charAt(i)) {
          player.difficulties.shift();
          code = player.generateCode();

          $('.invaderCode').text(code);
          $("#userInput").val("");
          $(".playerCode").text("");
          setTimeout(function() {
            $(".invaderCodeR").fadeToggle(200);
            $(".invaderCodeL").fadeToggle(200);
          }, 1000);

          $(".laserShotL").toggleClass("laserShotAnimation");
          $(".laserShotR").toggleClass("laserShotAnimation");
          $(".playerShip").toggleClass("playerShipAnimationRight");
          $(".playerShip").toggleClass("playerShipAnimationLeft");
          $(".laserShotAnimation").css("animation-delay","0s");

          playerLetters = [];
          player.health -= 1;
          return code;
        }
      }
    }

    charCheck(playerCode);
    console.log("player.difficulties B: ",player.difficulties);

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

      $(".laserShotAnimation").css("animation-delay","0s");

      $(".playerCode").text("");

      playerLetters = [];
      player.score += 1;
      player.checkScore(player.score);
      player.difficulties.shift();
      code = player.generateCode();
      $('.invaderCode').text(code);
      console.log('Score: ', player.score);
      return true;
    }
  });

  // DELAY ON STARTING ANIMATIONS
  setTimeout(function() {
    $(".playerShipAnimationRight").css("animation-delay","0s");
    $(".playerShipAnimationLeft").css("animation-delay","0s");

    $(".laserShotAnimation").css("animation-delay","0s");
  }, 2000);
});
