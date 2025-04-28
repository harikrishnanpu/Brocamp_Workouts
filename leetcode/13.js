/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let val = 0;
    let reversedOrder = s.split('').reverse().join('');
    for(let v of reversedOrder){
        switch(v){

            case "I":
            val += 1;
            break;

            case "V":
            val += 5;
            break;

            case "X":
            val += 10;
            break;

            case "L":
            val += 50;
            break;

            case "C":
            val += 100;
            break;

            case "D":
            val += 500;
            break;

            case "M":
            val += 1000;
            break;

            default:
            val += 0;

        }



    }
    
        return val
};