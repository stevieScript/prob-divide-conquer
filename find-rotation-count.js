function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] > arr[middle + 1]) {
        return middle + 1;
        } else if (arr[middle] < arr[start]) {
        end = middle - 1;
        } else {
        start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return 0;
  
}

module.exports = findRotationCount