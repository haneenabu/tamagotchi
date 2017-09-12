export class Pet{
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.happyLevel = 10;
  }

  setHunger(){
    setInterval(()=>{
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten(){
    if(this.foodLevel >0){
      return false;
    }else if (this.foodLevel === 0){
      return true;
    }
  }

  feed(){
    this.foodLevel = 10;
  }

  setSleep(){
    setInterval(()=>{
        this.sleepLevel --;
    }, 2000);
  }

  didYouGetSleep(){
    if(this.sleepLevel >0){
      return false;
    }else {
      return true;
    }
  }

  sleep(){
    this.sleepLevel =10;
  }

  setPlay(){
    setInterval(()=>{
        this.happyLevel --;
    }, 3000);
  }

  didYouGetPlay() {
    if (this.happyLevel > 0) {
      return false;
    }else {
      return true;
    }
  }

  play(){
    this.happyLevel = 10;
  }
  clearRemainingLevels() {
    this.happyLevel = 0;
    this.sleepLevel = 0;
    this.foodLevel = 0;
  }

  interval(showResults){
    const timer = setInterval(() => {
      let gameOver = this.didYouGetEaten();
      let gameOver1 = this.didYouGetPlay();
      let gameOver2 = this.didYouGetSleep();
      if (gameOver === true || gameOver1 === true || gameOver2 === true){
        clearInterval(timer);
        console.log(timer);

        this.clearRemainingLevels();
        // showResults("Game over! Your Pet died!");
        // return("Game Over! Your pet died");
      }
    }, 10001);
  }

  foodInterval(){
    let test;
    const someInterval = setInterval(()=>{
      if(this.foodLevel >= 0){
        test =  this.foodLevel;
        return $('.seconds').text(test);
      }
    }, 1001);
  }

  sleepInterval(){
    let test;
    const sleepInterval = setInterval(()=>{
      if(this.sleepLevel >= 0){
        test =  this.sleepLevel;
        if (test===0) {
          return $('.sleep').text("Game Over");
        } else {
          return $('.sleep').text(test);
        }

      }
    }, 1001);
  }

  playInterval(){
    let test;
    const playInterval = setInterval(()=>{
      if(this.happyLevel >= 0){
        test =  this.happyLevel;
        return $('.play').text(test);
      }
    }, 1001);
  }
}
