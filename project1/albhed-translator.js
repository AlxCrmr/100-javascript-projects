var engToAlbhed = {
    'A':'Y',    'B':'P',    'C':'L',    'D':'T',    'E':'A',    'F':'V',
    'G':'K',    'H':'R',    'I':'E',    'J':'Z',    'K':'G',    'L':'M',    'M':'S',
    'N':'H',    'O':'U',    'P':'B',    'Q':'X',    'R':'N',    'S':'C',    'T':'D',
    'U':'I',    'V':'J',    'W':'F',    'X':'Q',    'Y':'O',    'Z':'W',    ' ': ' '
}
var albhedToEng = {
    'A':'E',    'B':'P',    'C':'S',    'D':'T',    'E':'I',    'F':'W',
    'G':'K',    'H':'N',    'I':'U',    'J':'V',    'K':'G',    'L':'C',    'M':'L',
    'N':'R',    'O':'Y',    'P':'B',    'Q':'X',    'R':'H',    'S':'M',    'T':'D',
    'U':'O',    'V':'F',    'W':'Z',    'X':'Q',    'Y':'A',    'Z':'J',    ' ': ' '
}

var inputText = document.querySelector('#inputText');
var translatedText = document.querySelector('#translatedText');
var translateToAlbhed = document.querySelector('#translateToAlbhed');
var translateToEnglish = document.querySelector('#translateToEnglish');


function englishTranslate (input) {
    return input.toUpperCase().split('').map(function(v){ return engToAlbhed[v] }).join('');
}

function albhedTranslate (input) {
    return input.toUpperCase().split('').map(function(v){ return albhedToEng[v] }).join('');
}

translateToAlbhed.addEventListener("click", function () {
    translatedText.value = englishTranslate(inputText.value);
});

translateToEnglish.addEventListener("click", function () {
    translatedText.value = albhedTranslate(inputText.value);
});
