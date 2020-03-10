module.exports = function toReadable (number) {
    function oneDigit(number, ifzero) {
    if(number==='undefined') ifzero=false;
        switch(number){
            case 0: return ifzero ? 'zero':'';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';   
 }
}
function twoDigits(number) {
    if (number < 10) return oneDigit(number);
    if (number < 20) {
        switch (number) {
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
        }
    }

    let result = '';
    switch ((number / 10) | 0) {
        case 2: result += 'twenty'; break;
        case 3: result += 'thirty'; break;
        case 4: result += 'forty'; break;
        case 5: result += 'fifty'; break;
        case 6: result += 'sixty'; break;
        case 7: result += 'seventy'; break;
        case 8: result += 'eighty'; break;
        case 9: result += 'ninety'; break;
    }

    const first_digit = oneDigit(number % 10);
    if (first_digit) result += ' ' + first_digit;
    return result;
}

function getHundreds(digit) {
    const cyfr = oneDigit(digit);
    return `${cyfr} hundred`;
}

let strNumber = String(number);
switch (strNumber.length) {
    case 1: return oneDigit(number, true);
    case 2: return twoDigits(number);

    case 3: let result = getHundreds(Number(strNumber[0]));
            let digits = twoDigits(number % 100);
            if (digits) result += ' ' + digits;
            return result;
       
       

}
}