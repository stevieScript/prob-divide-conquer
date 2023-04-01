function sortedFrequency(arr, num) {
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while (start <= end) {
        if (arr[middle] === num) {
        count++;
        let left = middle - 1;
        let right = middle + 1;
        while (arr[left] === num) {
            count++;
            left--;
        }
        while (arr[right] === num) {
            count++;
            right++;
        }
        return count;
        } else if (arr[middle] < num) {
        start = middle + 1;
        } else {
        end = middle - 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return -1;
}

module.exports = sortedFrequency