function words(text) {
	var myObject = {};
    var matches = text.split(/\s+/g) //this is better as it recognises a possibly stray dollar sign and recognises it as a word
    for(i in matches) {
    	if(typeof myObject[matches[i]] == 'number') {
    		myObject[matches[i]]++;
    	}
    	else {
    		myObject[matches[i]] = 1;
    	}
    }
    return myObject;
}



// function words(text) {
//     var matches = text.split(/\s+/g) 
//     return matches.reduce( ( allWords, word ) => {
//     	if(word in allWords) {
//     		allWords[word]++;
//     	}
//     	else if(word == "toString")  { allWords`${word}` == 1; }
//     	else {
//     		allWords[word] = 1;
//     	}
//     	return allWords;
//     }, {})
// }

module.exports.words = words;