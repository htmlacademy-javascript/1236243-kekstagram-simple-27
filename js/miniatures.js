import {getFotos} from './data.js';

const PICTURES = document.querySelector('.pictures')
const PICTURE_TEMPLATE = document.querySelector('#picture')
    .content
    .querySelector('.picture')

const GET_FOTOS = getFotos()

const PICTURES_FRAGMENT = document.createDocumentFragment()

GET_FOTOS.forEach(({url, likes, comments}) => {
    const FOTO_ELEMENT = PICTURE_TEMPLATE.cloneNode(true)
    FOTO_ELEMENT.querySelector('img').src = url
    FOTO_ELEMENT.querySelector('.picture__comments').textContent = comments
    FOTO_ELEMENT.querySelector('.picture__likes').textContent = likes
    PICTURES_FRAGMENT.appendChild(FOTO_ELEMENT)
})

PICTURES.append(PICTURES_FRAGMENT)

export { PICTURES }