function bubbleSort(arr) {
    let swapped = true;

    while (swapped) {

        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const tmp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tmp;

                swapped = true;
            }
        }
    }

    return arr;
}

function isEven(num) {
    return num % 2 === 0;
}

function median(arr) {
    const arrSorted = bubbleSort(arr);

    let result;

    if (isEven(arrSorted.length)) {
        const index1 = arrSorted.length / 2;
        const index2 = index1 - 1;
        const item1 = arrSorted[index1];
        const item2 = arrSorted[index2];
        result = (item1 + item2) / 2;
    } else {
        const index = Math.floor(arrSorted.length / 2);
        result = arrSorted[index];
    }

    return result;
}

const arrEven = [6, 1, 4, 7];
const arrOdd = [6, 1, 4, 7, 2];

console.log(median(arrEven));
console.log(median(arrOdd));