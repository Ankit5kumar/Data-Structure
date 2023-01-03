// return true if a number is palindrom else false
var isPalindrome = function(x) {
    let str = x.toString()
    let left = 0;
    let right = str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        left++;
        right--;
    }
    return true
};