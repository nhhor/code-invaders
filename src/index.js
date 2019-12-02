import { Player } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let player = new Player ();
  let word = player.generateWord();
  $('#word-test').text(word);
});
