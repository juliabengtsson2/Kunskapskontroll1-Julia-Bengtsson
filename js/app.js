



// Skapar ett button-element till återställningsfunktionen.
let resetBtn = document.createElement('button');
 
// Skapar ett footer-element 
let footer = document.querySelector('footer');
 
// Placerar resetBtn efter/under footer-elementet
footer.insertAdjacentElement('afterend', resetBtn);
 
// Lägger till 'Reset all!'-text till resetBtn.
resetBtn.innerText = '*Reset all*';

//Stylar min resetBtn knapp
resetBtn.style.backgroundColor = 'lightgreen';
resetBtn.style.color = 'white';
resetBtn.style.border = 'none';
resetBtn.style.width = '10rem';
resetBtn.style.paddingTop = '10px';
resetBtn.style.paddingBottom = '10px';
resetBtn.style.borderRadius = '10px';
resetBtn.style.marginTop = '2rem';
resetBtn.style.marginLeft = '40rem';
resetBtn.style.marginBottom = '2rem';
resetBtn.style.cursor = 'pointer';
resetBtn.style.fontSize = '1rem';

/////

// En eventlistner på reset knappen med click.
resetBtn.addEventListener('click', resetAll);

function resetAll(){
    //Ändringar i första article elementet (grå hoodien)
    articleElement.style.backgroundColor = 'white';
    firsth2Element.innerText = 'Sinus Hoodie';
    firsth3Element.innerText = 'Ash';
    pElement.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!';

    //Ändrar tillbaka färgen på mitten knappen till svart.
    buyBtnTwo.style.backgroundColor = 'black';

    // Ändrar tillbaka färgen till svart på rubrikerna i footern.
    h3Menu.style.color = 'black';
    h3Where.style.color = 'black';
    h3Social.style.color = 'black';

    //Ändrar tillbaka h3 texten till 'Water'
    waterElement.innerText = 'Water';

    // Lägger till 'social media' ul i footern igen
    let articleFooter = document.querySelectorAll('section article');
    let socialMedia = articleFooter[2];
    socialMedia.style.display = 'flex';

    removeElement();
}


/*********************** Mouse hovrar enter och leave *****************************/

// Selectar alla article och figure elementet
let firstBackground = document.querySelector('article figure');

// Selectar alla figure och img elementen.
let firstSinus = document.querySelectorAll('figure img');
// Selectar articles första child - bilden. 
let firstPicture = firstSinus[0];

// En function händer när man hovrar med musen på den första produkten. 
firstPicture.addEventListener('mouseenter',
    function(event){
        // Byter bild när man lägger musen på elementet.
        firstPicture.src = 'img/shrek3.png';
        //Byter backgrundsfärg
        firstBackground.style.backgroundColor = 'lightgreen';
    }
)
// En annan function händer när man tar bort musen från bilden.
firstPicture.addEventListener('mouseleave',
    function(event){
        // Ändrar tillbaka bilden till orginalet när man tar bort musen.
        firstPicture.src = 'img/hoodie-ash.png';
        // Ändrar tillbaka bakgrundsfärgen
        firstBackground.style.backgroundColor = 'rgb(244, 182, 10)';
    }
)

// Selectar alla article & figure elementet.
let secondBackground = document.querySelectorAll('article figure');
// Selectar andra article & figure elementet.
let secBackground = secondBackground[1];

// Selectar alla figure och img elementen.
let secondSinus = document.querySelectorAll('figure img');
// Selectar den andra bilden med img taggen.
let secondPicture = secondSinus[1];

//Lägger till en eventlistner med mouseenter
secondPicture.addEventListener('mouseenter',
    function(event){
        //Byter bild när man hovrar över med musen
        secondPicture.src = 'img/shrek2.png';
        // Byter bakgrundsfärg
        secBackground.style.backgroundColor = 'lightgreen';
    }
)

// Lägger till en eventlistner med mouseleave
secondPicture.addEventListener('mouseleave',
    function(event){
        // Byter tillbaka till orginal bilden när musen tas bort.
        secondPicture.src = 'img/hoodie-fire.png';
        // Byter tillbaka bakgrundsfärgen.
        secBackground.style.backgroundColor = 'rgb(244, 182, 10)';
    }
)

// Selectar alla article och figure elementen.
let thirdBackground = document.querySelectorAll('article figure');
// Selectar sista article & figure elementet.
let thirdColor = thirdBackground[2];

// Selectar alla figure och img elementen.
let thirdSinus = document.querySelectorAll('figure img');
// Selectar sista bilden av Sinus Hoodies.
let thirdPicture = thirdSinus[2];

thirdPicture.addEventListener('mouseenter',
    function(event){
        // Byter bild på det utvalda elementet
        thirdPicture.src = 'img/shrek11.png';
        // Byter bakgrundsfärg
        thirdColor.style.backgroundColor = 'lightgreen';
    }
)

thirdPicture.addEventListener('mouseleave',
    function(event){
        // Byter tillbaka till orginalbilden
        thirdPicture.src = 'img/hoodie-ocean.png';
        // Orginal bakgrundsfärgen
        thirdColor.style.backgroundColor = 'rgb(244, 182, 10)';
    }
)


// Selectar alla knappar i HTML
let btnOne = document.querySelectorAll('button');
// Väljer den första knapp-elementet
let buyBtnOne = btnOne[0];

// Lägg till en mouseenter på den första knappen
buyBtnOne.addEventListener('mouseenter', 
    function(event){
        // Byter bakgrundsfärg på knappen
        buyBtnOne.style.backgroundColor = 'rgb(39, 87, 39)';
        // Ändrar texten
        buyBtnOne.innerText = 'Add to cart';
        // Ändrar storleken på texten
        buyBtnOne.style.fontSize = '.6rem';
    }
)

// Lägger till en mouseleave
buyBtnOne.addEventListener('mouseleave',
    function(event){
        //Ändrar tillbaka färgen på knappen
        buyBtnOne.style.backgroundColor = '#222';
        //Ändrar tillbaka texten
        buyBtnOne.innerText = 'buy';
        //Ändrar fontSizen på texten
        buyBtnOne.style.fontSize = '.8rem';
    }
)

// Väljer det andra knapp-elementet
let buyBtnTwo = btnOne[1];

// Lägg till en mouseenter på den andra knappen
buyBtnTwo.addEventListener('mouseenter', 
    function(event){
        // Byter bakgrundsfärg på knappen
        buyBtnTwo.style.backgroundColor = 'rgb(39, 87, 39)';
        // Ändrar texten
        buyBtnTwo.innerText = 'Add to cart';
        // Ändrar storleken på texten
        buyBtnTwo.style.fontSize = '.6rem';
    }
)

// Lägger till en mouseleave
buyBtnTwo.addEventListener('mouseleave',
    function(event){
        //Ändrar tillbaka färgen på knappen
        buyBtnTwo.style.backgroundColor = '#222';
        //Ändrar tillbaka texten
        buyBtnTwo.innerText = 'buy';
        //Ändrar fontSizen på texten
        buyBtnTwo.style.fontSize = '.8rem';
    }
)

// Väljer det tredje knapp-elementet
let buyBtnThree = btnOne[2];

// Lägg till en mouseenter på den tredje knappen
buyBtnThree.addEventListener('mouseenter', 
    function(event){
        // Byter bakgrundsfärg på knappen
        buyBtnThree.style.backgroundColor = 'rgb(39, 87, 39)';
        // Ändrar texten
        buyBtnThree.innerText = 'Add to cart';
        // Ändrar storleken på texten
        buyBtnThree.style.fontSize = '.6rem';
    }
)

// Lägger till en mouseleave
buyBtnThree.addEventListener('mouseleave',
    function(event){
        //Ändrar tillbaka färgen på knappen
        buyBtnThree.style.backgroundColor = '#222';
        //Ändrar tillbaka texten
        buyBtnThree.innerText = 'buy';
        //Ändrar fontSizen på texten
        buyBtnThree.style.fontSize = '.8rem';
    }
)


/******************************* Click funtionen **************************/

// Selectar alla article-elementen som finns i min HTML
let article = document.querySelectorAll('article');
// Selectar det första article.
let articleElement = article[0];

//Selectar alla h2 elementen som finns.
let h2Element = document.querySelectorAll('h2');
// Selectar ut det första h2-elementen.
let firsth2Element = h2Element[0];

// Väljer ut alla h3-elementen
let h3Element = document.querySelectorAll('h3');
// Väljer det första h3-elementet som finns.
let firsth3Element = h3Element[0];

// Selectar alla paragrafer som finns
let paragraf = document.querySelectorAll('p');
//Väljer de första paragraf-elementet
let pElement = paragraf[0];

buyBtnOne.addEventListener('click', 
    function(event){
        // Byter bakgrundsfärg till rosa
        articleElement.style.backgroundColor = 'lightpink';
        // Ändrar texten på rubriken (h2)
        firsth2Element.innerText = 'Where is Shrek?';
        // Ändrar texten på underrubriken (h3)
        firsth3Element.innerText = 'Gone!';
        // Ändrar texten på paragrafen
        pElement.innerText = 'Shrek är ett träsktroll som lever med en åsna och vill fånga prinssesan från högsta tornet i slottet.';
    }
)

// Selectar tredje h3 elementet på hemsidan.
let h3Menu = h3Element[3];
// Selectar fjärde h3 elementet.
let h3Where = h3Element[4];
//Selectar femte h3 elementet.
let h3Social = h3Element[5];

//Lägg på en click funktion på den tredje bilden.
thirdPicture.addEventListener('click',
    function(event){
        //Byter bakgrundsfärg på mitten knappen till ljusblå.
        buyBtnTwo.style.backgroundColor = 'lightblue';

        //Byter färg på rubrikerna i footern till ljusblå.
        h3Menu.style.color = 'lightblue';
        h3Where.style.color = 'lightblue';
        h3Social.style.color = 'lightblue';
    }
)

//Selectar html dokumentet
let html = document.querySelector('html');
// Selectar alla h3 element
let water = document.querySelectorAll('h3');
// Pekar ut det exakta h3-elementet jag vill använda
let waterElement = water[2];

// Lägger till 'keydown' metoden på html-elementet
html.addEventListener('keydown',
    function(event){
        // När användern klickar på 'a' eller 'A' kommer texten i det utvalda h3-elementet att ändras.
        if(event.key === 'a' || event.key === 'A'){
            waterElement.innerText = 'i´m blue, not green.'
        }
    }
)


// Selectar det första a-elementet.
let home = document.querySelector('a');
// Skapar en array/lista som ska printas ut i loopen.
const listItem = ['SHREKS EGENSKAPER:', '-Omtänksam', '-Snäll', '-Kort stubin', '-Rolig', '-Sann vän', '-Romantisk'];
// Add en click metod på 'home' länken högst upp på hemsidan.
home.addEventListener('click',
    function(event){
    // Skapar en ul.
    let ul = document.createElement('ul');
    // Selectar 'main'
    let main = document.querySelector('main');

    let li;
        //Skapar en for loop
    for(let i = 0; i < listItem.length; i++){
        //Skapar li-element
        li = document.createElement('li');
        // Tilldelar varje i en text från listItem.
        let text = document.createTextNode(listItem[i]);
        // Appendar text från ListItem till varje li
        li.appendChild(text);
        // Lägger till varje li inuti ul-elementet
        ul.appendChild(li);
        // Lägger till border, fontsize och padding på varje li
        li.style.border = '2px solid grey';
        li.style.fontSize = '1rem';
        li.style.padding = '0.5rem';
    }

    // Tilldelar vart på hemsidan ul-elementet ska visas.
    main.insertAdjacentElement('afterend', ul);
    // Stylar ul
    ul.style.width = '900px';
    ul.style.margin = '0 auto';
    ul.style.listStyle = 'none';
    ul.style.marginBottom = '2rem';

    // Stylar överrubriken till ul.
    ul.children[0].style.fontSize = '1rem';
    ul.children[0].style.color = 'pink';
    ul.children[0].style.border = 'none';
    
    }
)


h3Menu.addEventListener('click', // FUNKAR INTE MED RESET 
    function(event){
        let article = document.querySelectorAll('article');
        let articleElement = article[3];

        let aHrefElement = document.createElement('a');
        aHrefElement.href = '#';
        aHrefElement.innerText = 'About us';
        articleElement.appendChild(aHrefElement);
    }
)

function removeElement(){
    let aHrefElement = document.createElement('a');
    aHrefElement.href = '#';
    aHrefElement.innerText = 'About us';

    aHrefElement.setAttribute('class', 'removeClass');
    let removeLink = querySelector('.removeClass');
    console.log(removeLink)
}


/* Ta bort den sista UL (social media) i footern */

// Selectar alla article-element
let lastArticle = document.querySelectorAll('article');
// Väljer ut det sista index
let articleLast = lastArticle[5];

buyBtnTwo.addEventListener('click',
    function(event){
        //Kallar på funktionen nedanför
        removeSocialMedia();
    }
)

//Tar bort social media, ul-elementet
function removeSocialMedia(){
    let articleFooter = document.querySelectorAll('section article');

    let socialMedia = articleFooter[2];
    socialMedia.style.display = 'none';
}


