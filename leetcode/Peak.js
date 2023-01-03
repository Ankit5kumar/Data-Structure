function peakElement(arr, l, r){
    var mid = Math.round((l + r) / 2)

    if((mid == 0 || arr[mid - 1] <= arr[mid])&&(mid == arr.length - 1 || arr[mid + 1] <= arr[mid])){
        return arr[mid]
    }

    if(arr[mid - 1] > arr[mid]){
        return peakElement(arr, l, mid - 1)
    }
    return peakElement(arr, mid + 1, r)
}


console.log(peakElement([8, 9, 7, 2, 5, 6], 0, 6))




// another
function binarySearch(arr, l, r, key){
	if(r - l <= 1){
		return arr[l] == key?l + 1: -1 
	}
	var mid = Math.floor((l + r) / 2)
	var left = binarySearch(arr, l, mid, key)
	var right = binarySearch(arr, mid + 1, r, key)
	return left > right? left : right
}

console.log(binarySearch([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], 0, 10, 8))


// need to debug

let count = 0;

function merge(arr, start, mid, end) {
    let arr1 = arr.slice(start, mid+1);
    let arr2 = arr.slice(mid+1, end+1);

    let i = 0;
    let j =0;
    let k = start;
    
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            count+= arr1.length-i;
            j++; 
        }
        k++;
    }

    while(i<arr1.length) {
        arr[k++] = arr1[i++];
    }

    while(j<arr2.length) {
        arr[k++] = arr2[j++];
    }

    return;
}

function mergeSort(arr, start, end) {

    if(start>=end) {
        return;
    }
    let mid = Math.floor((start+end)/2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);

    return merge(arr, start, mid, end);
}

let arr = [5,6,3,2,8];
mergeSort(arr, 0, arr.length-1);
