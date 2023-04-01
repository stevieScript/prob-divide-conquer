function findFloor(arr, target) {
    let start = 0
    let end = arr.length - 1
    let floor = -1
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        
        if (arr[mid] === target) {
            return arr[mid]
        } else if (arr[mid] < target ) {
            floor = arr[mid]
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    
    return floor
}
  


module.exports = findFloor