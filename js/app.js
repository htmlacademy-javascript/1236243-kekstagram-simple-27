import { MINI_PICTURES } from './miniatures.js';
import {uploadFileFunction, buttonCloseFunction, formSubmit} from './form.js';
import { onListClick } from './form-filter.js';
import {onClickCloseError, onClickCloseSuccess, showError} from './message.js';
import { getData} from './api.js';
import {changeScaleMin, changeScaleMax} from './scale.js';


const runApp = function () {
  getData(MINI_PICTURES, showError);
  onListClick();
  uploadFileFunction();
  buttonCloseFunction();
  formSubmit();
  onClickCloseError();
  onClickCloseSuccess();
  changeScaleMin();
  changeScaleMax();
};

export {runApp};
