/*

-1 Ricevo tramite form il valore degli elementi elencati
(Nome e Cognome)(Km da percorrere)(Età del cliente)
-2 Definisco il prezzo al km
-3 Definisco il prezzo di base
-4 Definisco le vari fascie di età
-4 Definisco gli sconti 


*/




//Controllo collegamento file js
console.log('JS OK')

// Prendo gli elementi dal file HTML
const nameSurname = document.getElementById('name-surname')
console.log(nameSurname.value)

const userKm = document.getElementById('user-km')
console.log(userKm.value)

const userAge = document.getElementById('user-age')
console.log(userAge.value)

//Definisco il prezzo al KM
const priceKm = 0.21
console.log(priceKm)

//Preparo un eventuale sconto
let discount = null;
console.log(discount)

//Definisco il prezzo base
const basePrice = userKm.value * priceKm
console.log(basePrice)

//Definisco un eventuale sconto

if (userAge < 18) {
    discount = 20
}
else (userAge > 65)
{ discount = 40 }

//Applico lo sconto al prezzo finale
finalprice = basePrice
finalprice -= (finalprice / 100) * discount
console.log(finalprice)

// Aggiungo altri alementi al file

let priceTicketElement = document.getElementById('price-ticket')
console.log(priceTicketElement)
const button = document.getElementById('button')

button.addEventListener('click', function () {
    priceTicketElement.innerText = finalprice + '€'
    console.log(priceTicketElement)

});

passengerNameElement = document.getElementById('passenger-name')

passengerNameElement.innerText = nameSurname.value
























