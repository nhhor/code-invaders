import { SolarAge } from './../src/backend.js'


describe('SolarAge', ()=> {

  // Earth
  test('Should correctly add user age into object (earthAge).', () => {
    let earthAge = new SolarAge(10);
    // earthAge.planets;
    // console.log(earthAge);
    expect(earthAge.ageOnEarth).toEqual(10);
  });

  // Mercury
  test('Should correctly calculate number of Earth years to Mercury years.', () => {
    let earthAge = new SolarAge(10);
    // console.log("Mercury: ",earthAge.mercury); // 41.67
    expect(earthAge.ageOnMercury).toEqual(41.67);
  });

  // Venus
  test('Should correctly calculate number of Earth years to Venus years.', () => {
    let earthAge = new SolarAge(10);
    // console.log("Venus: ",earthAge.venus); // 16.13
    expect(earthAge.ageOnVenus).toEqual(16.13);
  });

  // Mars
  test('Should correctly calculate number of Earth years to Mars years.', () => {
    let earthAge = new SolarAge(10, 72.2);
    // console.log("Mars: ",earthAge.mars); // 5.32
    expect(earthAge.ageOnMars).toEqual(5.32);
  });

  // Jupiter
  test('Should correctly calculate number of Earth years to Jupiter years.', () => {
    let earthAge = new SolarAge(30);
    // console.log("Jupiter: ",earthAge.jupiter); // 2.53
    expect(earthAge.ageOnJupiter).toEqual(2.53);
  });

  // Lifespan Left
  test('Should correctly calculate how many years a user has left to live on each planet.', () => {
    let earthAge = new SolarAge(40, 72.2);
    expect(earthAge.timeRemainingOnEarth).toEqual(32.2);
    expect(earthAge.timeRemainingOnMercury).toEqual(134.17);
    expect(earthAge.timeRemainingOnVenus).toEqual(51.94);
    expect(earthAge.timeRemainingOnMars).toEqual(17.13);
    expect(earthAge.timeRemainingOnJupiter).toEqual(2.72);
    // console.log(earthAge);
  });

  // Lifespan Beyond Average
  test('Should correctly calculate how many years a user has lived beyond the average lifespan, on each planet.', () => {
    let earthAge = new SolarAge(82.2, 72.2);
    expect(earthAge.timeBeyondAverageOnEarth).toEqual(10);
    expect(earthAge.timeBeyondAverageOnMercury).toEqual(41.67);
    expect(earthAge.timeBeyondAverageOnVenus).toEqual(16.13);
    expect(earthAge.timeBeyondAverageOnMars).toEqual(5.32);
    expect(earthAge.timeBeyondAverageOnJupiter).toEqual(0.84);
    // console.log(earthAge);
  });


});
