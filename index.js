const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let interval
  return (seconds) => {
    clearInterval(interval)

    interval = setInterval(() => {
      let watchHours = Math.floor(seconds / 3600)
      let watchMinutes = Math.floor((seconds - watchHours * 3600) / 60)
      let watchSeconds = (seconds - watchHours * 3600) - watchMinutes * 60
    
      watchHours = watchHours < 10 ? '0' + watchHours : watchHours
      watchMinutes = watchMinutes < 10 ? '0' + watchMinutes : watchMinutes
      watchSeconds = watchSeconds < 10 ? '0' + watchSeconds : watchSeconds

      if (seconds > 0) { 
        seconds-- 
      } else {
        clearInterval(interval)
      }

      timerEl.innerHTML = `${watchHours}:${watchMinutes}:${watchSeconds}`
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  inputEl.value =inputEl.value.replace(/[\D]+/g, '')

});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
