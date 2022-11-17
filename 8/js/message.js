import { isEscapeKey } from './util.js';
import { onFormEscKeydown } from './form.js';

const templateErrorElement = document.querySelector('#error').content.querySelector('.error');
const error = templateErrorElement.cloneNode(true);

const templateSuccessElement = document.querySelector('#success').content.querySelector('.success');
const success = templateSuccessElement.cloneNode(true);
const errorButton = error.querySelector('.error__button');


const closeErrorEsc = (evt) => {
  if (isEscapeKey.evt) {
    evt.preventDefault();
    onClickCloseError ();
  }
};


const showError = function () {
  document.body.append(error);
  document.removeEventListener('keydown', onFormEscKeydown);
  document.addEventListener('keydown', closeErrorEsc);
};


function onClickCloseError () {
  errorButton.addEventListener('click', () => {
    document.body.removeChild(error);
  });
  document.removeEventListener('keydown', closeErrorEsc);
  document.addEventListener('keydown', onFormEscKeydown);

}

const showSuccess = function () {
  document.body.append(success);
};

export {showError, showSuccess, onClickCloseError};
