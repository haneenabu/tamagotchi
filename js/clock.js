// export class Clock {
//
//   constructor(endtime, id){
//     this.endtime = endtime;
//     this.id = id;
//     }
//
//
//    getTimeRemaining(endtime) {
//     let t = Date.parse(endtime) - Date.parse(new Date());
//     let seconds = Math.floor((t / 1000) % 60);
//
//     return {
//       'total': t,
//       'seconds': seconds
//     };
//   }
//
//    initializeClock(id, endtime) {
//     let clock = document.getElementById(id);
//     let secondsSpan = clock.querySelector('.seconds');
//
//      updateClock() {
//       let t = getTimeRemaining(endtime);
//       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//
//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     }
//
//     this.updateClock();
//     let timeinterval = setInterval(updateClock, 1000);
//   }
//
//   let deadline = new Date(Date.parse(new Date()) + 10000);
//   initializeClock('clockdiv', deadline);
// }
//
// let Clock {
//   deadline: new Date(Date.parse(new Date()) + 10000),
//   getTimeRemaining: function(endtime) {
//     let t = Date.parse(endtime) - Date.parse(new Date());
//     let seconds = Math.floor((t / 1000) % 60);
//
//     return {
//       'total': t,
//       'seconds': seconds
//     }},
//     initializeClock: function(id, endtime) {
//       let clock = document.getElementById(id);
//       let secondsSpan = clock.querySelector('.seconds');
//
//       function updateClock() {
//         let t = getTimeRemaining(endtime);
//         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//
//         if (t.total <= 0) {
//           clearInterval(timeinterval);
//         }
//       }
//       updateClock();
//       let timeinterval = setInterval(updateClock, 1000);
//     },
//     updateClock: function('clockdiv', deadline);
//     }
//
//
//
//
//
//




export function Clock() {

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock() {

      let t = getTimeRemaining(endtime);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
  }

  let deadline = new Date(Date.parse(new Date()) + 10000);
  initializeClock('clockdiv', deadline);

}

// exports.clockModule =  Clock;
