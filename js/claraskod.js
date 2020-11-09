/* Claras kod.. START! */

// Väljer och selectar min återställningsknapp

let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';

//Sätt en event listener på reset-knappen
reset.addEventListener('click', resetAll);

function resetAll(){
    //reset art1 till white background
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';

    //reset radikalt till Sinus Hoodie
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';
}

//sätt event listener för första knappen
let knapp1 = btns[0];
knapp1.addEventListener('click', 
    function(event){
        changeArt1toHotPink();
        changeH2inArt2();
    }
);


 /* Claras kod slut! */