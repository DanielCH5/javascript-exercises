const palindromes = function (string) {
    let arr = string.split('');
    arr.reverse();
    let newString = arr.join('');

    if(newString === string){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
