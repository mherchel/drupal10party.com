(() => {
  function outputLocalTime(el) {
    const startTime = new Date(el.dataset.time);

    let hours = startTime.getHours() < 13 ? startTime.getHours() : startTime.getHours() - 12;
    if (hours === 0) { // yeah yeah
      hours = 12;
    }
    const amOrPm = startTime.getHours() < 12 ? 'am' : 'pm';

    el.innerHTML = `
      Dec ${startTime.getDate()} ${hours}:00${amOrPm}
    `;
  }

  const timeElements = document.querySelectorAll('[data-time]');
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;


  timeElements.forEach(outputLocalTime);
})();
