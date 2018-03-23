module.exports = class Clock {
  constructor(time) {
    this.time = 49062000
    this.counter = 0
    this.startClock()
  }

  getTime() {
    return this.msTotime(this.time);
  }

  setTime() {
    this.time += 1;
  }

  msTotime(duration) {
    let seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
  }

  timeToMs(time) {
    let ms = 0
    let timeArray = time.split(":", 3)
    let hour = timeArray[0]
    let min = timeArray[1]
    let sec = timeArray[2]
    return hour * 3600000 + min * 60000 + sec * 1000
  }

  startClock() {
    setInterval(function(){
      this.time += 1000
    }, 1000)
  }

  getCounter() {
    return this.counter
  }
}
