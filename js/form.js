import { isEscapeKey } from './util.js';
import './form-filter.js';

const formIMG = document.querySelector('.img-upload__form');
const uploadFile = formIMG.querySelector('#upload-file');
const imgOverlay = formIMG.querySelector('.img-upload__overlay');
const buttonClose = formIMG.querySelector('.img-upload__cancel');
const imgPreview = document.querySelector('.img-upload__preview')


const pristine = new Pristine(formIMG, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
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
  imgPreview.className = 'img-upload__preview none'
  document.removeEventListener('keydown', onFormEscKeydown);
}
const uploadFileFunction = function() {
  uploadFile.addEventListener('click', (evt)=>{
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    openForm();
  });
}

const buttonCloseFunction = function () {
  buttonClose.addEventListener('click', ()=>{
    document.querySelector('body').classList.remove('modal-open');
    closeForm();
  });
}

const formSubmit = function () {
  formIMG.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate()
    if (isValid) {
      formIMG.submit() // 400 (Bad Request)
    } else {
      closeForm() // пока просто закрывает форму, далее сделаю окно с ошибкой
    }
  })
}


export {uploadFileFunction, buttonCloseFunction, formSubmit}