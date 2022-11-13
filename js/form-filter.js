import { VALUE_FILTER, VALUE_EFFECT } from "./data.js";

const effects = document.querySelector('.effects')
const effectsItem = effects.querySelectorAll('.effects__item')
const effectRadioInput = effects.querySelectorAll('[name="effect"]')
const imgPreview = document.querySelector('.img-upload__preview')


const onListClick = function () {
    [].forEach.call(effectRadioInput, function(inp) {
        inp.addEventListener('click', function () {
            // for (let i = 0; i < effectsItem.length; i++) {
            //     if (inp.value = VALUE_FILTER[i]) {
            //         imgPreview.classList.add(VALUE_EFFECT[i])  
            //     }
            // }
        })
    })
    }

export {onListClick}





