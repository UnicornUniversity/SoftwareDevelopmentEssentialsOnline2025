function quickSort(arr) {

    if (arr.length < 2) return arr;

    // pivot
    const chosenItem = arr[0];

    // buckets
    const leftArr = [];
    const rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= chosenItem) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    // recursion
    const leftArrSorted = quickSort(leftArr);
    const rightArrSorted = quickSort(rightArr);

    // merge

    const result = [];

    for (let i = 0; i < leftArrSorted.length; i++) {
        result.push(leftArrSorted[i]);
    }

    result.push(chosenItem);

    for (let i = 0; i < rightArrSorted.length; i++) {
        result.push(rightArrSorted[i]);
    }

    return result;
}

const arr = [6, 1, 4, 7];

console.log(quickSort(arr));