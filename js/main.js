// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const GET_RANDOM_NUMBER = function (min, max) {
    if (min === max || min > max) {
        return NaN
    } else {
        if (typeof min === 'number' && typeof max === 'number') {    
            if(min >= 0 && max > 0) {
                min = Math.ceil(min);
                max = Math.floor(max);
                let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                return randomNumber
            } else {
                return NaN
            }
        } else {
            return NaN
        }
    }
}

const COMMENT_LENGTH = function (comment, maxLength) {
    if (comment.length <= maxLength) {
        return true
    } else {
        return false
    }
}