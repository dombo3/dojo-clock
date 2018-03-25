class Clock {
  constructor(time, clockType) {
    this.observers = []
    this.hoursPerDay = 24
    this.minutesPerHour = 60
    this.secondPerMinutes = 60 
    
    if (time == "13:78:69") {
      this.hoursPerDay = 24
      this.minutesPerHour = 80
      this.secondPerMinutes = 70
    }
    time == undefined ? this.time = 49062000 : this.time = this.timeToMs(time)
    this.startClock()
  }

  getTime() {
    return this.msTotime(this.time);
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
      this.time += 1000
      this.observers.forEach(o => o(this.getTime()))
    }, 1000)
  }

  observe(observer) {
    this.observers.push(observer)
  }
}
