const complexFunction = (arg1, arg2) => {
    return arg1 + arg2;
};
const cache = () => {
    const stack = {};
    return (...arg) => {
        if (!(arg in stack)) {
            return stack[arg] = complexFunction.call(this, ...arg);
        }
        console.log("it's cache:");
        return stack[arg];
    };
};
const cachedFunction = cache(complexFunction);
console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'baz'));
console.log(cachedFunction('foo', 'baz'));
console.log(cachedFunction('baz', 'baz'));
console.log(cachedFunction('baz', 'bar'));
console.log(cachedFunction('baz', 'foo'));
console.log(cachedFunction('baz', 'baz'));

const ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    },
};
ladder.up().up().down().up().showStep(); //  2
ladder.up().up().down().up().showStep(); //  4
ladder.up().up().down().up().up().down().up().showStep(); //  7

// ES6
const applyAll = (func, ...rest) => {
    return rest.reduce(func);
};
const sum = (arg1, arg2) =>  arg1 + arg2;
const mul = (arg1, arg2) => arg1 * arg2;
console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24

// ES5
// function applyAll (func) {
//     return func.apply(this, arguments);
// };
// function sum () {
//     var sum = 0;
//     for (var i = 1; i < arguments.length; i++){
//         sum = sum + arguments[i]
//     }
//     return sum;
// }
// function mul () {
//     var sum = 1;
//     for (var i = 1; i < arguments.length; i++){
//         sum = sum * arguments[i]
//     }
//     return sum;
// }
//
// console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
// console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24