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
    }else{
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

  interval(){
    const timer = setInterval(() => {
      // console.log(this.foodLevel);
      // console.log(this.happyLevel);
      // console.log(this.sleepLevel);
      let gameOver = this.didYouGetEaten();
      let gameOver1 = this.didYouGetPlay();
      let gameOver2 = this.didYouGetSleep();
      if (gameOver === true || gameOver1 === true || gameOver2 === true){
        clearInterval(timer);
        // alert ("Game Over! Your pet died");
        return("Game Over! Your pet died");
      }
    }, 10001);
  }
  foodInterval(){
    let test;
    const someInterval = setInterval(()=>{
      if(this.foodLevel >= 0){
        console.log(this.foodLevel);
        test =  this.foodLevel;
        return $('.seconds').text(test);
      }
    }, 1001);
  }
  newInterval(){
    return this.foodInterval;
  }
}
