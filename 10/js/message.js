import { isEscapeKey } from './util.js';
import { onFormEscKeydown, closeForm } from './form.js';

const templateErrorElement = document.querySelector('#error').content.querySelector('.error');
const error = templateErrorElement.cloneNode(true);

const templateSuccessElement = document.querySelector('#success').content.querySelector('.success');
const success = templateSuccessElement.cloneNode(true);
const errorButton = error.querySelector('.error__button');
const successButton = success.querySelector('.success__button');


function closeErrorEsc (evt) {
  if (isEscapeKey.evt) {
    evt.preventDefault();
    onClickCloseError();
  }
}

function closeSuccessEsc (evt) {
  if (isEscapeKey.evt) {
    evt.preventDefault();
    onClickCloseSuccess();
  }
}

const showError = function () {
  document.body.append(error);
  document.removeEventListener('keydown', onFormEscKeydown);
  document.addEventListener('keydown', closeErrorEsc);
};

const showSuccess = function () {
  document.body.append(success);
  document.removeEventListener('keydown', onFormEscKeydown);
  document.addEventListener('keydown', closeSuccessEsc);
};

function onClickCloseError () {
  errorButton.addEventListener('click', () => {
    document.body.removeChild(error);
  });
  document.removeEventListener('keydown', closeErrorEsc);
  document.addEventListener('keydown', onFormEscKeydown);
}

function onClickCloseSuccess () {
  successButton.addEventListener('click', () => {
    document.body.removeChild(success);
    closeForm();
  });
}

export {showError, showSuccess, onClickCloseError, onClickCloseSuccess};
