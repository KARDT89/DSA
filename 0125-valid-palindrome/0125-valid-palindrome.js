/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanedStr = cleanStr(s)
    return checkPalindrome(cleanedStr)
};

function cleanStr(s){
    let str = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let cleanedStr = ''
    for(let i=0;i<s.length;i++){
        if(str.includes(s[i].toLowerCase())){
            cleanedStr+=s[i].toLowerCase()
        }
    }
    return cleanedStr
}

function checkPalindrome(s){
    let left = 0
    let right = s.length - 1
    while(left < right){
        if(s[left] !== s[right]) return false
        left++
        right--
    }
    return true
}