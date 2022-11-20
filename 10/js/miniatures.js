const PICTURES = document.querySelector('.pictures');
const PICTURE_TEMPLATE = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const MINI_PICTURES = (pictures) => {
  const PICTURES_FRAGMENT = document.createDocumentFragment();

  pictures.forEach(({url, likes, comments}) => {
    const FOTO_ELEMENT = PICTURE_TEMPLATE.cloneNode(true);
    FOTO_ELEMENT.querySelector('img').src = url;
    FOTO_ELEMENT.querySelector('.picture__comments').textContent = comments;
    FOTO_ELEMENT.querySelector('.picture__likes').textContent = likes;
    PICTURES_FRAGMENT.appendChild(FOTO_ELEMENT);
  });

  PICTURES.append(PICTURES_FRAGMENT);
  return PICTURES;
};

export { MINI_PICTURES };

