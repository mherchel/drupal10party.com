(() => {
  function outputLocalTime(el) {
    const startTime = new Date(el.dataset.time);

    let hours = startTime.getHours() < 13 ? startTime.getHours() : startTime.getHours() - 12;
    if (hours === 0) { // yeah yeah
      hours = 12;
    }

    const minutes = startTime.getMinutes() < 10 ? `0${startTime.getMinutes()}` : startTime.getMinutes();
    const amOrPm = startTime.getHours() < 12 ? 'am' : 'pm';

    el.innerHTML = `
      <div class="section-schedule__time-local">
        ${startTime.getDate()} Dec ${hours}:${minutes}${amOrPm}
      </div>
      <div class="section-schedule__time-utc">
        ${startTime.getUTCHours()}:00 UTC
      </div>
    `;
  }

  const timeElements = document.querySelectorAll('[data-time]');
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  document.querySelector('.section-schedule__time-zone').innerHTML = `
    All times below <em>should</em> be in your local time zone (${userTimeZone}).
  `;
  timeElements.forEach(outputLocalTime);
})();
