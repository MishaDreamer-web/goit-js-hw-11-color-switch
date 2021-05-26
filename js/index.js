const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const TIMEDELAY = 1000;
let colorInterval = null;

const startBtn = document.querySelector('[data-action="start"]');
// console.log(startBtn);

const stopBtn = document.querySelector('[data-action="stop"]');
// console.log(stopBtn);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  console.log('click on start');
  colorInterval = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, TIMEDELAY);
  if (colorInterval) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  console.log('click on stop');
  clearInterval(colorInterval);
  colorInterval = null;
  if (colorInterval === null) {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

// document.body.style.backgroundColor = colors[2];
