import {Pet} from './../js/tamagotchi.js';
describe('FeedPet', function() {
  let pet = new Pet("Pierre");
  beforeEach(function() {
    jasmine.clock().install();
    pet.setHunger();
  });
  afterEach(function () {
    jasmine.clock().uninstall();
  });
  it('should have a name and a food level of 10 when created', function() {
    expect(pet.name).toEqual("Pierre");
    expect(pet.foodLevel).toEqual(10);
  });
  it ('should have food level of 7 after 3 seconds', function() {
    jasmine.clock().tick(3001);
    expect(pet.foodLevel).toEqual(7);
  });
  it('should get very hungry if the food level drops below zero', function() {
    pet.foodLevel = 0;
    expect(pet.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(pet.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    pet.feed();
    expect(pet.foodLevel).toEqual(10);
  });
});
describe('RestPet', function() {
  let pet = new Pet("Pierre");
  beforeEach(function() {
    jasmine.clock().install();
    pet.setSleep();
  });
  afterEach(function () {
    jasmine.clock().uninstall();
  });
  it('should have a name and sleepLevel of 10', function() {
    expect(pet.name). toEqual('Pierre');
    expect(pet.sleepLevel).toEqual(10);
  });
  it('should have a sleep level of 8 after 4 seconds', function() {
    jasmine.clock().tick(4001);
    expect(pet.sleepLevel).toEqual(8);
  });
  it('should get very sleepy if the sleep level drops below zero', function() {
    pet.sleepLevel = 0;
    expect(pet.didYouGetSleep()).toEqual(true);
  });
  it('should get very tired if 20 seconds pass without sleep', function() {
    jasmine.clock().tick(20001);
    expect(pet.didYouGetSleep()).toEqual(true);
  });
  it('should have a sleep level of ten if it sleeps', function() {
    jasmine.clock().tick(19001);
    pet.sleep();
    expect(pet.sleepLevel).toEqual(10);
  });
});
describe('PlayPet', function() {
  let pet = new Pet("Pierre");
  beforeEach(function() {
    jasmine.clock().install();
    pet.setPlay();
  });
  afterEach(function () {
    jasmine.clock().uninstall();
  });
  it('should have a name and happyLevel of 10', function() {
    expect(pet.name). toEqual('Pierre');
    expect(pet.happyLevel).toEqual(10);
  });
  it('should have a happy level of 8 after 6 seconds', function() {
    jasmine.clock().tick(6001);
    expect(pet.happyLevel).toEqual(8);
  });
  it('should get very upset if the happy level drops below zero', function() {
    pet.happyLevel = 0;
    expect(pet.didYouGetPlay()).toEqual(true);
  });
  it('should get very upset if 30 seconds pass without play', function() {
    jasmine.clock().tick(20001);
    expect(pet.didYouGetPlay()).toEqual(true);
  });
  it('should have a happy level of ten if it plays', function() {
    jasmine.clock().tick(19001);
    pet.play();
    expect(pet.happyLevel).toEqual(10);
  });
});
