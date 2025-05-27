const getTheTitles = function(books) {
  const titles = books.flatMap((book) => book.title);
    return titles;
    
};

// Do not edit below this line
module.exports = getTheTitles;
