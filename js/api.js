const submitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unBlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const getData = (onSuccees, onFail) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data',)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccees(pictures);
    })
    .catch(() => {onFail(); document.querySelector('.error__title').textContent = 'Ошибка сервера';}
    );
};

const sendData = (onSuccess, onFail, body) => {
  blockSubmitButton();
  fetch(' https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body,
  })
    .then((response) =>
    {if(response.ok) {
      onSuccess();
      unBlockSubmitButton();
    } else {
      onFail();
      unBlockSubmitButton();
    }
    })
    .catch(() => {onFail();});
};

export {getData, sendData};
