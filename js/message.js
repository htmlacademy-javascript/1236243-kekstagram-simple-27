const templateErrorElement = document.querySelector('#error').content.querySelector('.error');
const error = templateErrorElement.cloneNode(true);

const templateSuccessElement = document.querySelector('#success').content.querySelector('.success');
const success = templateSuccessElement.cloneNode(true);


const showError = function () {
    document.body.append(error)
}

const showSuccess = function () {
  document.body.append(success)
}

export {showError, showSuccess}