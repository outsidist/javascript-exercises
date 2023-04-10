const repeatString = function(word,instancesOf) {
if (instancesOf < 0) return "ERROR";
let string = ""
for (let i=0; i<instancesOf; i++) {
    string+=word;
}
 return string;

};

// Do not edit below this line
module.exports = repeatString;
