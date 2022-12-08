(() => {
  function updateTimer() {
    const future = Date.parse('December 14, 2022 16:00:00 GMT');
    const now = new Date();
    const diff = future - now;

    const secs = Math.floor(diff / 1000);
    const mins = Math.floor(secs / 60);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);

    const s = secs - mins * 60;
    const m = mins - hours * 60;
    const h = hours - days * 24;
    const d = days;

    const countdown = document.querySelector('.countdown');

    countdown.querySelector('[data-days').textContent = d;
    countdown.querySelector('[data-hours').textContent = h;
    countdown.querySelector('[data-minutes').textContent = m;
    countdown.querySelector('[data-seconds').textContent = s;
  }

  setInterval(updateTimer, 1000);
})();
