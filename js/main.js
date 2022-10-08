// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let getRandom = function (min, max) {
    if (min === max || min > max) {
        return NaN
    } else {
        if (typeof min === 'number' && typeof max === 'number') {    
            if(min >= 0 && max > 0) {
                min = Math.ceil(min);
                max = Math.floor(max);
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                return console.log('Результат: ' + randomNumber + ' из диапазона "от ' + min + ' до ' + max + '"')
            } else {
                return console.log('Введите числа больше 0')
            }
        } else {
            return NaN
        }
    }
}

let commentLength = function (comment, maxLength) {
    if (comment.length <= maxLength) {
        return true
    } else {
        return false
    }
}