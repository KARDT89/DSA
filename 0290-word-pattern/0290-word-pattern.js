/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let hash = {}
    let usedWords = new Set()
    let patternBox = s.split(" ")
    if(pattern.length !== patternBox.length) return false
    for(let i = 0; i < pattern.length; i++){
        if(!hash[pattern[i]]){
            if(usedWords.has(patternBox[i])){
                return false
            } else{
                 hash[pattern[i]] = patternBox[i]
                 usedWords.add(patternBox[i])
            }
        } else {
            if(hash[pattern[i]] !== patternBox[i]) return false
        }
    }
    return true
};