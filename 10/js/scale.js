import {formIMG, imgPreview} from './form.js';

const valueScale = formIMG.querySelector('.scale__control--value');
const buttonSmaller = formIMG.querySelector('.scale__control--smaller');
const buttonBigger = formIMG.querySelector('.scale__control--bigger');

const STEP = 25;
const MIN_SCALE = 25;
const MAX_STEP = 100;


const changeScaleMin = function () {
  buttonSmaller.addEventListener('click', () => {
    const currentValue = Number.parseInt(valueScale.value, 10);
    const newValue = currentValue - STEP;
    valueScale.value = `${newValue}%`;
    if (newValue <= MIN_SCALE) {
      valueScale.value = `${MIN_SCALE}%`;
    }
    imgPreview.style.transform = `scale(${Number.parseInt(valueScale.value, 10) / 100})`;
  });

};

const changeScaleMax = function () {
  buttonBigger.addEventListener('click', () => {
    const currentValue = Number.parseInt(valueScale.value, 10);
    const newValue = currentValue + STEP;
    valueScale.value = `${newValue}%`;
    if (newValue >= MAX_STEP) {
      valueScale.value = `${MAX_STEP}%`;
    }
    imgPreview.style.transform = `scale(${Number.parseInt(valueScale.value, 10) / 100})`;
  });

};

export {changeScaleMin, changeScaleMax};

