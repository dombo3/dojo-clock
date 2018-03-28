class Clock {
  constructor(time, clock) {
    this.observers = []
    this.hoursPerDay = 24
    this.minutesPerHour = 80
    this.secondPerMinutes = 70
    this.tick = 1000

    if (typeof clock !== "undefined") {
      this.hoursPerDay = clock.hoursPerDay
      this.minutesPerHour = clock.minutesPerHour
      this.secondPerMinutes = clock.secondPerMinutes
    }
    
    time == undefined ? this.time = 49062000 : this.time = this.timeToMs(time)
    
    this.startClock()
  }

  getTime() {
    return this.msTotime(this.time);
  }

  setTick(tick) {
    this.tick = tick
  }

  msTotime(duration) {
    let seconds = parseInt((duration/1000)%this.secondPerMinutes)
        , minutes = parseInt((duration/(1000*this.secondPerMinutes))%this.minutesPerHour)
        , hours = parseInt((duration/(1000*this.secondPerMinutes*this.minutesPerHour))%this.hoursPerDay);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
  }

  timeToMs(time) {
    let ms = 0
    let timeArray = time.split(":", 3)
    let hour = parseInt(timeArray[0], 10)
    let min = parseInt(timeArray[1], 10)
    let sec = parseInt(timeArray[2], 10)

    return hour * (this.minutesPerHour * this.secondPerMinutes * 1000) + min * (this.secondPerMinutes * 1000) + sec * 1000
  }
 
  startClock() {
    setInterval(() => {
      this.time += parseInt(this.tick)
      this.observers.forEach(o => o(this.getTime()))
    }, 1000)
  }

  observe(observer) {
    this.observers.push(observer)
  }
}

if (typeof module !== "undefined") {
  module.exports = Clock;
}
