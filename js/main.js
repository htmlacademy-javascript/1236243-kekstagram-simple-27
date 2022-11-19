import { MINI_PICTURES } from './miniatures.js';
import {uploadFileFunction, buttonCloseFunction, formSubmit} from './form.js';
import { onListClick } from './form-filter.js';
import {onClickCloseError } from './message.js';
import {changeScaleMin, changeScaleMax} from './scale.js';

MINI_PICTURES();
onListClick();
uploadFileFunction();
buttonCloseFunction();
formSubmit();
onClickCloseError();
changeScaleMin()
changeScaleMax()