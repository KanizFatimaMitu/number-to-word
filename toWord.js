let input = document.querySelector('input');
let convert = document.querySelector('button');
let word = document.querySelector('h4');

convert.addEventListener( 'click', () => {
    word.innerHTML = numberToWords.toWords(input.value);
} )