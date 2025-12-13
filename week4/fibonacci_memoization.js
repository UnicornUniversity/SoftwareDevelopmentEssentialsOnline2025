// key-value collection
// cortège
// dictionary
// HashMap
// Hash
const cache = {};

function fibonacci(num) {

    if (cache[num] !== undefined) {
        return cache[num];
    }

    let result;
    switch (num) {
        case 0:
            result = 0;
            break;
        case 1:
            result = 1;
            break;
        default:
            result = fibonacci(num - 1) + fibonacci(num - 2);
            break;
    }

    cache[num] = result;

    return result;
}

console.log(fibonacci(10000));