const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector("body");

const colorSwitch = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.intervalId = setInterval(changeColorHandler, 1000);
    this.isActive = true;
    startBtnRef.disabled = true;
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    startBtnRef.disabled = false;
  },
};

startBtnRef.addEventListener("click", colorSwitch.start.bind(colorSwitch));
stopBtnRef.addEventListener("click", colorSwitch.stop.bind(colorSwitch));

function changeColorHandler() {
  bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
