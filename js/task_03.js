function validateTitle(value) {
    const iChars = [' ', '!', ':', '-', '?', '.', ','];
    if (
        typeof value === 'string' &&
        value[0] === value[0].toUpperCase() &&
        value.length > 2 &&
        value.length < 20 &&
        isNaN(Number(value[0])) &&
        !iChars.includes(value[0]) &&
        validLatin(value) === undefined
    ) {
        return 'VALID';
    } else if (typeof value === 'boolean') {
        return 'Incorrect input data';
    }
    return 'INVALID';
}

function validLatin(valueArr) {
    const iChars = [' ', '!', ':', '-', '?', '.', ','];
    let newArr = [];
    let result;
    const value = valueArr.split('');
    value.forEach((el) => {
        if (iChars.indexOf(el) === -1 && isNaN(+el)) {
            newArr.push(el);
        }
    });
    newArr.forEach((el) => {
        if ((el.charCodeAt(0) > 90 && el.charCodeAt(0) < 97) || el.charCodeAt(0) < 65 || el.charCodeAt(0) > 122) {
            result = false;
        }
    });
    return result;
}
// console.log(validateTitle('Title!')); // 'VALID'
// console.log(validateTitle('Title!')); // 'VALID'
// console.log(validateTitle('Tit e!')); // 'VALID'
// console.log(validateTitle('s')); // 'INVALID'
// console.log(validateTitle('12title'));// 'INVALID'
// console.log(validateTitle('Title?')); // 'VALID'
// console.log(validateTitle('Title ')); // 'VALID'
// console.log(validateTitle(' Title')); // 'INVALID'
// console.log(validateTitle('Tайtle')) // 'INVALID'
// console.log(validateTitle(false)); // 'Incorrect input data'

function sum(value1, value2) {
    let result;
    if (typeof value1 === 'string') {
        result = value2 % 3 === 0 && value2 % 5 === 0 ?
            value2 * -1 + +value1 :
            +value2 + +value1;
    } else {
        result = +value1 % 3 === 0 && +value1 % 5 === 0 ?
            value1 * -1 + +value2 :
            value1 + +value2;
    }
    return result;
}
// console.log(sum('25', 15)); // 10
// console.log(sum(41, '3')); // 44
// console.log(sum('3', 45)); // -42
// console.log(sum('15', 15)); // 0
// console.log(sum(15, '15')); // 0
// console.log(sum('15', '15')); // 0
// console.log(sum(15, 15)); // 0
