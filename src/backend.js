export class Player {
  constructor() {
    this.score = 0;
    this.level = 1;
    this.health = 5;
    this.time = 20;
    this.difficulties = ["<p>", "<img>", "text-align", "const", "<!DOCTYPE html>", "css/styles.css", "<script></script>", "event.preventDefault();", "#00ff00", "<title>Planetary Landings</title>", "Math.random()", "padding: 16px 32px 8px 32px;", "let planets = 8;", "git commit -m", "<button id='launch-ship'>Launch Ship</button>", "<a href='https://nasa.gov/'>NASA</a>", "background-color: rgba(255, 255, 255, 0.5);", "$('#space-invader').append(alien);", "<link rel='stylesheet' href='css/styles.css'>", "import { Player } './src/backend.js'", "if (response.data[i].planets[0].visit_planet.spacestation === undefined)", "for (let i = 0; i < this.planets.length; i++)", "$('form#intergalactic-planetary-planetary-intergalactic').submit(function(event) {", "const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];", "let spaceInvader = `${Alien} is ${crazy} to invade!`"];
    this.totalScore = (this.score + this.time + (this.health * 25)); 
  }
  generateCode() {
    console.log('this.difficulties[0]: ', this.difficulties[0]);
    for (let i = 0; i < this.difficulties.length; i++) {
      return this.difficulties[i];
    }
  }
}
