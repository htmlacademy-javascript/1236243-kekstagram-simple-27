import {createDescriptionFoto, GET_RANDOM_NUMBER} from './util.js';

const FOTOS = 25;

const DESCRIPTION_ADVERB = [
  'Невероятно',
  'Восхитительно',
  'Классно',
  'Замечательно',
  'Необычно',
  'Странно'
];

const DESCRIPTION_VERB = [
  'посидели',
  'отдохнули',
  'встретились',
  'погуляли',
  'поиграли',
  'покатались',
];

// const VALUE_FILTER = [
//   {filter: 'none', effect: ''},
//   {filter: 'chrome', effect: 'effects__preview--chrome'},
//   {filter: 'sepia', effect: 'effects__preview--sepia'},
//   {filter: 'marvin', effect: 'effects__preview--marvin'},
//   {filter: 'phobos', effect: 'effects__preview--phobos'},
//   {filter: 'heat', effect: 'effects__preview--heat'}
// ]

const VALUE_FILTER = [
  'none',
  'chrome',
  'sepia',
  'marvin',
  'phobos',
  'heat'
];


const VALUE_EFFECT = [
  'none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat'

];


const getFotos = function () {
  const arrayDescription = [];
  while (arrayDescription.length < FOTOS) {
    const index = GET_RANDOM_NUMBER(1, 25);
    let found = false;
    for (let i = 0; i < arrayDescription.length; i++) {
      if (arrayDescription[i].id === index) {
        found = true;
        break;
      }
    }
    if (!found) {
      arrayDescription[arrayDescription.length] = createDescriptionFoto(index);
    }
  }
  const SORTED = [...arrayDescription].sort((a,b) => a.id - b.id);
  return SORTED;
};

export {getFotos,DESCRIPTION_ADVERB, DESCRIPTION_VERB, VALUE_FILTER, VALUE_EFFECT};
