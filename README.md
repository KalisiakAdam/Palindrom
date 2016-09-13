
// Is it palindrom word?

function polin(word) {
    var wordPolin = "";
    for (var j = word.length - 1; j >= 0; j--) {
        wordPolin += word[j];
    }
    if (wordPolin === word) {

        document.write(word + " Jest odwracalne");
    } else {
        document.write(word + " Nie jest odwracalne");
    }
}
//polin("kajak");
