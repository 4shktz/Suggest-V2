function suggestWords() {
    let xhr = new XMLHttpRequest();
  
    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let words = xhr.responseText.split('\n');
            let input = document.querySelector('#inputwords');
            let correspondingWords = [];
    
            for (let i = 0; i < words.length; i++) {
                if (words[i].startsWith(input.value.toLowerCase())) {
                    correspondingWords.push(words[i]);
                }
            }
    
            let wordsDiv = document.querySelector('#words');
            wordsDiv.innerHTML = correspondingWords.join(' ');
        }
    };
  
    xhr.open("GET", "words.txt", true);
    xhr.send();
}
  
document.querySelector('#inputwords').addEventListener('input', suggestWords);  