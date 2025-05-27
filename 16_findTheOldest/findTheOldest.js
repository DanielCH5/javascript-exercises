const findTheOldest = function(array) {
    const oldest = array.sort(function (a,b){
        if(!a.yearOfDeath){
            const d = new Date();
            a.yearOfDeath = d.getFullYear();
        }
        if(!b.yearOfDeath){
            const d = new Date();
            b.yearOfDeath = d.getFullYear();
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
