const removeFromArray = function (array, ...removeItem) {
    const newArray = [];
    array.forEach((item) => {
        if (!removeItem.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
