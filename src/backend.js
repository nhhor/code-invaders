export class Player {
  constructor() {
    this.score = 0;
    this.level = 1;
    this.errors = 0;
  }
  generateCode() { //need to be able to display different code on succesful typing of code
    let level1 = ["<p>", "<img>", "<h1>", "text-align", "const", "<!DOCTYPE html>"];
    let level2 = ["css/styles.css", "<script></script>", "event.preventDefault();", "#00ff00", "<title>Planetary Landings</title>"];
    let level3 = ["Math.random()", "padding: 16px 32px 8px 32px;", "let planets = 8;", "git commit -m", "<button id='launch-ship'>Launch Ship</button>"];
    let level4 = ["<a href='https://nasa.gov/'>NASA</a>", "background-color: rgba(255, 255, 255, 0.5);", "<link rel='stylesheet' href='css/styles.css'>", "import { Player } './src/backend.js'"];
    let level5 = ["if (response.data[i].planets[0].visit_planet.spacestation === undefined)", "for (let i = 0; i < this.planets.length; i++)", "$('form#intergalactic-planetary-planetary-intergalactic').submit(function(event) {", "const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];"];
    for (let i = 0; i < level1.length; i++) {
      return level1[i];
    }
    for (let i = 0; i < level2.length; i++) {
      return level2[i];
    }
    for (let i = 0; i < level3.length; i++) {
      return level3[i];
    }
    for (let i = 0; i < level4.length; i++) {
      return level4[i];
    }
    for (let i = 0; i < level5.length; i++) {
      return level5[i];
    }
  }
  checkScore() { //Work in progress, generateCode() still needs to go to the next word on successful typing of displayed word
    let level1 = ["<p>", "<img>", "<h1>", "text-align", "const", "<!DOCTYPE html>"];
    let level2 = ["css/styles.css", "<script></script>", "event.preventDefault();", "#00ff00", "<title>Planetary Landings</title>"];
    let level3 = ["Math.random()", "padding: 16px 32px 8px 32px;", "let planets = 8;", "git commit -m", "<button id='launch-ship'>Launch Ship</button>"];
    let level4 = ["<a href='https://nasa.gov/'>NASA</a>", "background-color: rgba(255, 255, 255, 0.5);", "<link rel='stylesheet' href='css/styles.css'>", "import { Player } './src/backend.js'"];
    let level5 = ["if (response.data[i].planets[0].visit_planet.spacestation === undefined)", "for (let i = 0; i < this.planets.length; i++)", "$('form#intergalactic-planetary-planetary-intergalactic').submit(function(event) {", "const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];"];
    if (this.score === 0) {
      console.log('score is: ', this.score);
      console.log(level1[0]);
    } else if (this.score === 5) {
      console.log('Difficulty 2');
      console.log(level2[0]);
    } else if (this.score === 10) {
      console.log('Difficulty 3');
      console.log(level3[0]);
    } else if (this.score === 15) {
      console.log('Difficulty 4');
      console.log(level4[0]);
    } else if (this.score === 20) {
      console.log('Difficulty 5');
      console.log(level5[0]);
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
