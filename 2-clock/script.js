function setDate() {
  const now = new Date()
  console.log(now);
  const seconds = now.getSeconds()
  const secDeg = ((seconds/60) * 360) + 90
  const secHand = document.querySelector('.secs-hand')
  secHand.style.transform = `rotate(${secDeg}deg)`

  const minutes = now.getMinutes()
  const minDeg = ((minutes/60) * 360) + 90
  const minHand = document.querySelector('.mins-hand')
  minHand.style.transform = `rotate(${minDeg}deg)`

  const hourDeg = ((minutes/12) * 360) + 90
  const hourHand = document.querySelector('.hour-hand')
  hourHand.style.transform = `rotate(${hourDeg}deg)`
  console.log(hourDeg);
}
setInterval(setDate, 1000)
