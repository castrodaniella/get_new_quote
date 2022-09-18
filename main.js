let quote = [
    '“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein',
    '“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi',
    '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain'
]

/*for(let i =0; i < quote.length; i++){

    
}*/

let number = Math.floor(Math.random()*3);

let myButton = document.getElementById('button');
let setQuote = document.getElementById("text");

//eventTarge.addEventListener('click', showQuote());

function showQuote(){
  setQuote.innerHTML = quote[number];
}

myButton.addEventListener('click', showQuote)

    