var time = [
    "12/24/2023 11:59 PM",
    "span#days",
    "querySelector",
    "span#hours",
    "span#minutes",
    "span#seconds",
    "floor",
    "textContent",
  ];
  const DATE_TARGET = new Date(time[0]);
  const SPAN_DAYS = document[time[2]](time[1]);
  const SPAN_HOURS = document[time[2]](time[3]);
  const SPAN_MINUTES = document[time[2]](time[4]);
  const SPAN_SECONDS = document[time[2]](time[5]);
  const MILLISECONDS_OF_A_SECOND = 1000;
  const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
  const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
  const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;
  function updateCountdown() {
    const _0x149C4 = new Date();
    const _0x149B0 = DATE_TARGET - _0x149C4;
    const _0x149D8 = Math[time[6]](_0x149B0 / MILLISECONDS_OF_A_DAY);
    const _0x149EC = Math[time[6]](
      (_0x149B0 % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR
    );
    const _0x14A00 = Math[time[6]](
      (_0x149B0 % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE
    );
    const _0x14A14 = Math[time[6]](
      (_0x149B0 % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND
    );
    SPAN_DAYS[time[7]] = _0x149D8;
    SPAN_HOURS[time[7]] = _0x149EC;
    SPAN_MINUTES[time[7]] = _0x14A00;
    SPAN_SECONDS[time[7]] = _0x14A14;
  }
  updateCountdown();
  setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
  function cambiarFondoImagen(url) {
    const bgImageElement = document.querySelector(".bg-image");
    bgImageElement.style.backgroundImage = "url('" + url + "')";
  }
  if (time <= 0) {
    clearInterval(intervalId);
    cambiarFondoImagen("../img/christmas.jpg");
  }
  