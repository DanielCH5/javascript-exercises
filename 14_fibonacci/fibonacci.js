const fibonacci = function(num) {
    let number = 1;
    let secondNumber = 0;

    for (i = 0; i < num; i++){
        secondNumber += number + secondNumber;
        return secondNumber;

    }
};

// Do not edit below this line
module.exports = fibonacci;
