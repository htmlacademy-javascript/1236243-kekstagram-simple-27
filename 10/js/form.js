import { isEscapeKey } from './util.js';
import { showError, showSuccess} from './message.js';
import { sendData } from './api.js';

const formIMG = document.querySelector('.img-upload__form');
const uploadFile = formIMG.querySelector('#upload-file');
const imgOverlay = formIMG.querySelector('.img-upload__overlay');
const buttonClose = formIMG.querySelector('.img-upload__cancel');
const imgPreview = document.querySelector('.img-upload__preview');
const valueScale = formIMG.querySelector('.scale__control--value');
const textComment = formIMG.querySelector('.text__description');


const pristine = new Pristine(formIMG, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)){
    evt.preventDefault();
    closeForm ();
  }
};

function openForm () {
  imgOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onFormEscKeydown);
}

function closeForm () {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgPreview.className = 'img-upload__preview none';
  valueScale.value = `${100}%`;
  textComment.value = '';
  imgPreview.removeAttribute('style');
  document.removeEventListener('keydown', onFormEscKeydown);


}
const uploadFileFunction = function() {
  uploadFile.addEventListener('click', (evt)=>{
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    openForm();
  });
};

const buttonCloseFunction = function () {
  buttonClose.addEventListener('click', ()=>{
    document.querySelector('body').classList.remove('modal-open');
    closeForm();
  });
};

const formSubmit = function () {
  formIMG.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const isValid = pristine.validate();
    if (isValid) {

      sendData(showSuccess, showError, formData);
    } else {
      showError();
    }
  });
};

export {uploadFileFunction, buttonCloseFunction, formSubmit, onFormEscKeydown, formIMG, imgPreview, closeForm};
