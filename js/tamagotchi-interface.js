import {Pet} from './../js/tamagotchi.js';
// import {Clock} from './../js/clock.js';
// let Clock = require("./../js/clock.js").clockModule;

$(function(){
  let pet = new Pet("Pierre");
  // let clock = Clock();
  // console.log(clock.initializeClock);
  let hunger = pet.setHunger();
  let tired = pet.setSleep();
  let happy = pet.setPlay();
  let interval = pet.interval();
  let foodInterval = pet.foodInterval();
  console.log(pet.foodInterval());


  $("#tamagotchiFeed").submit(function(event) {
    event.preventDefault();
    $('.seconds').text(foodInterval);
    // console.log(foodInterval);
    // console.log('pet foodLevel is: '+ pet.foodLevel);
    pet.feed();
  });
  $("#tamagotchiPlay").submit(function(event){
    event.preventDefault();
    pet.play();
  });
  $("#tamagotchiSleep").submit(function(event){
    event.preventDefault();
    pet.sleep();
  });



});
