function displayTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const timeString = `${h}:${m}:${s}`;
    clock.textContent = timeString;
  }
  
  setInterval(displayTime, 1000);

// function displayTime() {
//   const clock = document.getElementById('clock');
//   const hour = document.getElementById('hour');
//   const minute = document.getElementById('minute');
//   const second = document.getElementById('second');
//   const now = new Date();
//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();
//   const hString = ('0' + h).slice(-2);
//   const mString = ('0' + m).slice(-2);
//   const sString = ('0' + s).slice(-2);
//   hour.textContent = hString;
//   minute.textContent = mString;
//   second.textContent = sString;
// }

// setInterval(displayTime, 1000);

  