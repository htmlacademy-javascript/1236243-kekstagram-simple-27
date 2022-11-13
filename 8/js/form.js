import { isEscapeKey } from './util.js';
import './form-filter.js';

const formIMG = document.querySelector('.img-upload__form');
const uploadFile = formIMG.querySelector('#upload-file');
const imgOverlay = formIMG.querySelector('.img-upload__overlay');
const buttonClose = formIMG.querySelector('.img-upload__cancel');

// const pristine = new Pristine (formIMG, {
//     classTo: 'img-upload__text',
//     errorTextParent: 'img-upload__text',
//     errorTextClass: 'img-upload__text--error-text',
//   });

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
  formIMG.reset();
  document.removeEventListener('keydown', onFormEscKeydown);


}

uploadFile.addEventListener('click', (evt)=>{
  evt.preventDefault();
  document.querySelector('body').classList.add('modal-open');
  openForm();
});

buttonClose.addEventListener('click', ()=>{
  document.querySelector('body').classList.remove('modal-open');
  closeForm();

});
