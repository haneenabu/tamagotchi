import {Pet} from './../js/tamagotchi.js';
var apiKey = require('./../.env').apiKey;
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
  let sleepInterval = pet.sleepInterval();
  let playInterval = pet.playInterval();

  // let request = new XMLHttpRequest();
  // let randpregerg = 'https://api.giphy.com/v1/gifs/search?api_key=b81addf496fc43258eaaba5e550debda&q=tamagotchi&limit=25&offset=0&rating=G&lang=en';
  //
  // request.onreadystatechange = function() {
  //   if (this.readyState === 4 && this.status === 200){
  //     let response = JSON.parse(this.responseText);
  //     getElements(response);
  //   }
  // };
  // request.open("GET", randpregerg, true);
  // request.send();
  //
  // function getElements(response){
  //   $("#imageplace").attr('src',response.data[0].images.original.url);
  // };
  //

  let promise = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url='https://api.giphy.com/v1/gifs/search?api_key=b81addf496fc43258eaaba5e550debda&q=tamagotchi&limit=25&offset=0&rating=G&lang=en';
    request.onload = function() {
      if(this.status === 200){
        resolve(request.response);
      } else {
        reject(Erorr(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });
  promise.then(function(response){
    const body = JSON.parse(response);
    $("#imageplace").attr('src', body.data[0].images.original.url);
  }, function(error){
    $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  })



  $("#tamagotchiFeed").submit(function(event) {
    event.preventDefault();
    $('.seconds').text(foodInterval);
    pet.feed();
  });


  $("#tamagotchiPlay").submit(function(event){
    event.preventDefault();
    $('.sleep').text(sleepInterval);
    pet.play();
  });
  $("#tamagotchiSleep").submit(function(event){
    event.preventDefault();
    $('.play').text(playInterval);
    pet.sleep();
  });

});

// });
