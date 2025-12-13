function fibonacci(num) {
    switch (num) {
        case 0: return 0;
        case 1: return 1;
        default:
            return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(50));