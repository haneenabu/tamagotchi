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
}
