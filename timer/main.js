let timer, s = 0, m = 0, h = 0, t = 0;
  function startStopTimer() {
    if (t) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        t ? s++ : clearInterval(timer);
        updateTimer();
      }, 1000);
    } t ^= 1;}
  function resetTimer() {
    clearInterval(timer);
    timer = undefined;
    s = m = h = 0;
    updateTimer();
    t = 0; }
  function updateTimer() {
    const padZero = (value) => (value < 10 ? '0' : '') + value;
    document.getElementById('timer').innerText = `${padZero(h)}:${padZero(m)}:${padZero(s)}`; }
