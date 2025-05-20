const sumAll = function(first, last) {
    let sum = 0;
    let isInteger = Number.isInteger(first, last);
   
    if (first < 0 || last < 0
        ||  !isInteger || typeof first != "number" || typeof last != "number"
    ){
        return "ERROR";
    } else if (last < first){
        for(i = last; i <= first; i++){
            sum += i;
        }
        return sum;
    } else{
        for (i = first; i <= last; i++)
        {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
