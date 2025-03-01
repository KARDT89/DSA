/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let prevMap = {}
   
    for(let i=0; i<strs.length; i++){
        let sorted = strs[i].split("").sort().join()
        if(sorted in prevMap){
            prevMap[sorted].push(strs[i])
        }else{
            prevMap[sorted] = [strs[i]]
        } 
    } return Object.values(prevMap)
};