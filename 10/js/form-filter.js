import { VALUE_FILTER, VALUE_EFFECT } from './data.js';

const effects = document.querySelector('.effects');
const effectsItem = effects.querySelectorAll('.effects__item');
const effectRadioInput = effects.querySelectorAll('[name="effect"]');
const imgPreview = document.querySelector('.img-upload__preview');

let valueFilter;

let valueEffect = VALUE_EFFECT[0];
imgPreview.classList.add(valueEffect);

const onListClick = function () {
  effectRadioInput.forEach((inp) => {
    inp.addEventListener('click', () => {
      valueFilter = inp.value;
      for (let i = 0; i < effectsItem.length; i++) {
        if (valueFilter === VALUE_FILTER[i] ) {
          imgPreview.classList.remove(valueEffect);
          imgPreview.classList.add(VALUE_EFFECT[i]);
          valueEffect = VALUE_EFFECT[i];
        }
      }
    });
  });
};

export { onListClick };
