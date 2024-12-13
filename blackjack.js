//Blackjackj oyunu
let player = {
    name: "Aydın",
    chips: 145
}
let cards = []
let total = 0
let hasBlackJack = false ;//false çünkü oyunun başındayız ve oyuncuda henüz blackjack yok
let isAlive = false ;//false çünkü oyuncu henüz hayatta değil 
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById ("sum-el") ;
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13)+1; 
   if (randomNumber === 1) {
       return 11 ;
   } else if (randomNumber > 10) {
       return 10;
   } else{
    return randomNumber
   }
   
}

// //Oyunun başlatıldığı fonksiyon
function startGame() {
    isAlive = true
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard();
    cards = [firstNumber,secondNumber]
    total = firstNumber + secondNumber

    renderGame()
}

//OYUNUN OLUSTURULDUGU FONKSIYON 
function renderGame() {
    cardsEl.textContent = "Cards: "  ;
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards [i] + " ";
    }
    sumEl.textContent = "Sum: " + total
    // sumEl.textContent += total; bunu yazınca sonu 31 ise butona her basılınca 31 ekrana yazdırılır
    if (total < 21) {
        message = "Do you want to draw a new card ?"// (yeni bir kart çekmek istermisin);
    } else if(total === 21) {
        message = "you have got blackjack !";// blackjack in var
        hasBlackJack = true ;
    }else{
        message = "You are out of  the game !!" //(oyunun disindasin)
        isAlive = false  + ": you exeeded the limit";
    }
    
    messageEl.textContent=message
    // console.log(message);//bunu fonksiyonun içine yazmalıyız
}

// console.log(isAlive );
// console.log(hasBlackJack  ) ;

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard();
        total += card ;//mevcut değişkene değer atıyoruz "+=" şeklinde olmalı
        renderGame()//oyun başlat
        console.log("Drawing a new card from the deck");//desteden yeni bir kart çekme
        cards.push(card); 
    }

}
