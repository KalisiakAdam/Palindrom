
// Is it palindrom word?

function polin(word) {
    var wordPolin = "";
    for (var j = word.length - 1; j >= 0; j--) {
        wordPolin += word[j];
    }
    if (wordPolin === word) {
        document.write(word + " is palindrom, wow");
    } else {
        document.write(word + " unfortunately is not a palindrom");
    }
}
//polin("kajak");
