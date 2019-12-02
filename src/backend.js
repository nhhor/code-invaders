import $ from 'jquery';

export class Player {
  constructor () {
    this.score = 0;
    // this.difficulty;
    this.errors = 3;
  }
  generateWord () {
    let html = ["<p>Kuiper Belt</p>", "<h1>Orion Nebula</h1>", "<a href='https://nasa.gov/'>NASA</a>", "<hr>", "<img src='martian-picture.jpg' alt='image of a green martian'>", "<div id='lunar-rocks' class='wrapper'></div>", "<link rel='stylesheet' href='css/styles.css'>", "<button id='launch-ship'>Launch Ship</button>", "<title>Planetary Landings</title>", "<!DOCTYPE html>"];
    // let css = ["#lunar-rocks {margin: auto;}", "h1 {color: green;}", "#ffffff", "display: none;", "font-size: 24px;", "padding: 16px 32px 8px 32px;", "background-color: rgba(255, 255, 255, 0.5);", "text-align: center;", "height: 100%;", "img {float: right;}"];
    // let javascript = ["$('#lunar-rocks').val();", "Math.random();", "let planets = 8;", "for (let i = 0; i < this.planets.length; i++)", "return false;",  "launchShip ();", "refuelShip();", "event.preventDefault();", "if (response.data[i].planets[0].visit_planet.spacestation === undefined)", "import 'bootstrap';" ];
    for(let i = 0; i < html.length; i++){
      return html[i];
    }
  }
}
