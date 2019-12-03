export class Player {
  constructor() {
    this.score = 0;
    this.level = 1;
    this.errors = 0;
    this.difficulties = ["<p>", "<img>", "text-align", "const", "<!DOCTYPE html>", "css/styles.css", "<script></script>", "event.preventDefault();", "#00ff00", "<title>Planetary Landings</title>", "Math.random()", "padding: 16px 32px 8px 32px;", "let planets = 8;", "git commit -m", "<button id='launch-ship'>Launch Ship</button>", "<a href='https://nasa.gov/'>NASA</a>", "background-color: rgba(255, 255, 255, 0.5);", "$('#space-invader').append(alien);", "<link rel='stylesheet' href='css/styles.css'>", "import { Player } './src/backend.js'", "if (response.data[i].planets[0].visit_planet.spacestation === undefined)", "for (let i = 0; i < this.planets.length; i++)", "$('form#intergalactic-planetary-planetary-intergalactic').submit(function(event) {", "const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];", "let spaceInvader = `${Alien} is ${crazy} to invade!`"];
  }
  generateCode() {
    for (let i = 0; i < this.difficulties.length; i++) {
      return this.difficulties[i];
    }
  }
  checkScore() {
    if (this.score === 0) {
      console.log('score is: ', this.score);
    } else if (this.score === 5) {
      console.log('Difficulty 2');
    } else if (this.score === 10) {
      console.log('Difficulty 3');
    } else if (this.score === 15) {
      console.log('Difficulty 4');
    } else if (this.score === 20) {
      console.log('Difficulty 5');
    }
  }
  randomCode(arr){// work in progress skeleton code to test things
    let level1 = ["<p>", "<img>", "<h1>", "text-align", "const", "<!DOCTYPE html>"];
    let level2 = ["css/styles.css", "<script></script>", "event.preventDefault();", "#00ff00", "<title>Planetary Landings</title>"];
    let level3 = ["Math.random()", "padding: 16px 32px 8px 32px;", "let planets = 8;", "git commit -m", "<button id='launch-ship'>Launch Ship</button>"];
    let level4 = ["<a href='https://nasa.gov/'>NASA</a>", "background-color: rgba(255, 255, 255, 0.5);", "<link rel='stylesheet' href='css/styles.css'>", "import { Player } './src/backend.js'"];
    let level5 = ["if (response.data[i].planets[0].visit_planet.spacestation === undefined)", "for (let i = 0; i < this.planets.length; i++)", "$('form#intergalactic-planetary-planetary-intergalactic').submit(function(event) {", "const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];"];
      let randomizedNumber = Math.floor(Math.random() * level1.length);
      console.log(level1[randomizedNumber]);
  }
}
