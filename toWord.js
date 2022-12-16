let input = document.querySelector('input');
let convert = document.querySelector('button');
let word = document.querySelector('h4');

convert.addEventListener( 'click', () => {
    word.innerHTML = numberToWords.toWords(input.value);
    word.innerHTML = numberToWords.toOrdinal(input.value);
    word.innerHTML = numberToWords.toWordsOrdinal(input.value);
} )