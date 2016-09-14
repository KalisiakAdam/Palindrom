function polin(){
   var word = document.getElementById("word").value;
   var wordPolin = "";
        for (var j = word.length-1; j>=0; j--) {
            wordPolin+= word[j];
        }
		if (wordPolin===word){
		
			
			document.getElementById("yes").innerHTML = "Słowo " + word + " jest palindromem.";
		}
		else{
		
			document.getElementById("no").innerHTML = "Słowo " + word + " nie jest palindromem.";
		}
	
}

polin(word);
