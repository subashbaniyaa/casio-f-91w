const WEEKDAY = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

const el = {
  ampm:     document.getElementById('ampm'),
  weekday:  document.getElementById('weekday'),
  day:      document.getElementById('day'),
  hours:    document.getElementById('hours'),
  minutes:  document.getElementById('minutes'),
  seconds:  document.getElementById('seconds'),
  lcd:      document.getElementById('lcd'),
  lightBtn: document.getElementById('light-btn'),
};

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
  const d = new Date();
  const h = d.getHours();
  el.ampm.textContent    = h < 12 ? 'AM' : 'PM';
  el.weekday.textContent = WEEKDAY[d.getDay()];
  el.day.textContent     = pad(d.getDate());
  el.hours.textContent   = pad(h % 12 || 12);
  el.minutes.textContent = pad(d.getMinutes());
  el.seconds.textContent = pad(d.getSeconds());
}

tick();
setInterval(tick, 1000);

// Light button — hold to illuminate
function lightOn()  { el.lcd.classList.add('on');    document.body.classList.add('off'); }
function lightOff() { el.lcd.classList.remove('on'); document.body.classList.remove('off'); }

el.lightBtn.addEventListener('mousedown',  lightOn);
el.lightBtn.addEventListener('mouseup',    lightOff);
el.lightBtn.addEventListener('mouseleave', lightOff);
el.lightBtn.addEventListener('touchstart', lightOn,  { passive: true });
el.lightBtn.addEventListener('touchend',   lightOff);
