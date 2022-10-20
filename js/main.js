// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const FOTOS = 25;
const GET_RANDOM_NUMBER = function (min, max) {
  if (min === max || min > max) {
    return NaN;
  } else {
    if (typeof min === 'number' && typeof max === 'number') {
      if(min >= 0 && max > 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
      } else {
        return NaN;
      }
    } else {
      return NaN;
    }
  }
};

const COMMENT_LENGTH = function (comment, maxLength) {
  if(typeof comment === 'string' && comment.length <= maxLength) {
    return true;
  }
  return false;
};

COMMENT_LENGTH();

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

const getRandomArrayElement = (elements) => elements[GET_RANDOM_NUMBER(0, elements.length - 1)];


const createDescriptionFoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTION_ADVERB) } ${ getRandomArrayElement(DESCRIPTION_VERB)}`,
  likes: GET_RANDOM_NUMBER(15, 200),
  comments: GET_RANDOM_NUMBER(0, 200),
});

const getFotos = () => Array.from({ length: FOTOS }, (_, index) => createDescriptionFoto(index + 1));

getFotos();
