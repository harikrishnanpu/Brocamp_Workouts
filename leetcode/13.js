//WEEK 10

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) { // LCM
    let val = 0;
    let arr = s.split('');
    let roman = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    
    let value = 0;
        

    for(let i=0; i < arr.length; i++){
        

        for(let r in roman){
            if(arr[i] == r){
                if(value < roman[r]){
                    value  = roman[r] - value
                }else{
                    value += roman[r]
                }
            }
        }
        
    }
    
    return value
    
    
}


console.log(romanToInt("V"));