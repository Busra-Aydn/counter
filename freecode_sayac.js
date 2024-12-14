//kullanıcının köpek yılı yasını hesaplayan bir uygulama yapacagım 1 insan yılı,7 köpek yılına eşittir
// let myAge = 20;
// let dogAge = 7;
// let myDogRatio = myAge * dogAge;
// console.log(myDogRatio);//ratio=oran demek

// let userAge = parseInt(prompt('enter your age'))
// let dogYear = 7;
// let userDogRatio = userAge * dogYear;
// console.log(`your age in dog years is:${userDogRatio}`);//köpek yıllarına göre yaşınız



// laps Completed= tamamlanan turlar,increment lap=turu arttır
// let lapsCompleted=0;
// function incrementLap() {
//     lapsCompleted =lapsCompleted + 1;
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted);


// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints +=50
// console.log(bonusPoints);
// bonusPoints -= 75
// console.log(bonusPoints);
// bonusPoints += 45
// console.log(bonusPoints);


// let lap1=34;
// let lap2=33;
// let lap3=36;
// function toplam() {
//     // let totalTime = lap1 + lap2 + lap3; 
//     // console.log(totalTime);   
//     console.log(lap1 + lap2 + lap3);
// }
// toplam()

let firstName = "Büşra ";//burada büşra dan hemen sonra sagına bir boşluk bırakırsak 'Büşra Aydın ' şeklinde olur yani boşluk bırakır
let lastName = " Aydin";//burda da aydın nın soluna ekleresek isim soy isim yine ayrı yazılır
let fullName = firstName + lastName
console.log(fullName);
console.log(`Hello my name is ${firstName} ${lastName}`);

let isim = "Aydin";
let selamlama = "Hi there" 
function called() {
    console.log(selamlama + ", " +isim + "!");
}

// called()

let myPoints = 3 ;

function add3Points(){
    myPoints += 3 ;
    
} 

function removePoints() {
    myPoints -= 1 ;
 }
// add3Points()
// add3Points()
// add3Points()
// removePoints()
// removePoints()
// console.log(myPoints);

// console.log("my points :" + (5 + 7));//parantez içine almazsak toplamaz 57 olur.
// console.log("4"+"5");//45 olur çünkü string number a çevirmedik.

// let userName = "per"
// let message = "you have tree new notifications"//(uc yeni bildiriminiz var)
// let messageToUser=message + " , " + userName
// console.log(messageToUser);
// // console.log(message +","+ userName);

// let name = "Aydın" ;
// let greeting = "hello , my name is";
// let myGreeting = greeting + " , " + name ;
// console.log(myGreeting);
// console.log("2"+ "4");


//1. YOL
// let wellcomeEl=document.getElementById("welcome-el")
// let name2 = "aydin";
// let greeting2 = "hi! my name is"
// wellcomeEl.innerText=name2 + greeting2

// //2.YOL
// let name2 = "aydin";
// let greeting2 =" welcome back";
// let wellcomeEl = document.getElementById("welcome-el").innerText = greeting2 +" "+ name2
// console.log(wellcomeEl);


//1. YOL
// let counter=0;
// function increment() {
// //   console.log('düğmeye tıklandı (the button was clicked)');
//     counter += 1
//     document.getElementById("count-el").innerText=counter
// } 

// 2. YOL
let art=0;
let htmlTag=document.getElementById("count-el")
function increment() {
    art += 1;
    // htmlTag.innerText=art;
      htmlTag.textContent=art;

}


let saveEl=document.getElementById("save-el")
function save() {
    let el = art + "-"
    //saveEl.innerText=saveEl.innerText + art + el
    // saveEl.innerText += el//innerText te ; previous entires:1-2-3- burda ':' dan sonra sagında boşluk olmaz
    saveEl.textContent += el//textContext te ; previous entires: 0-1-4  burda ise ':' dan sonra boşluk olur
    console.log(art);//girdiğmiz yani arttırdığımız kişi sayısını kaydediyor
    htmlTag.textContent = 0 ;
    art = 0 ;
}
