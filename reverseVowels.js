/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var tempA = s.split('');
    var vowel = new Set(['a','e','i','o','u','A','E','I','O','U']);
    var length = s.length;
    var arr = [];
    var index = [];
    for (var i = 0; i < length; i++) {
        var char = tempA[i];
        if (vowel.has(char)) {
            arr.push(char);
            index.push(i);
        }
    }
    for (var j = 0; j < index.length; j++) {
        tempA[index[j]] = arr.pop();
    }

    return tempA.join('');

};
