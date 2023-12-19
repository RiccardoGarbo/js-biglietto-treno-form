/*

-1 Ricevo tramite form il valore degli elementi elencati
(Nome e Cognome)(Km da percorrere)(Età del cliente)
-2 Definisco il prezzo al km
-3 Definisco lo sconto in base all'età del cliente



/*Controllo collegamento file js*/
console.log('JS OK')

// Prendo gli elementi dal file HTML
const nameSurname = document.getElementById('name-surname')
console.log(nameSurname.value)

const userKm = document.getElementById('user-km')
console.log(userKm.value)

/*Definisco il prezzo al KM*/
const priceKm = 0.21
console.log(priceKm)

/*Preparo un eventuale sconto*/
let discount = null;
console.log(discount)

/*Definisco il prezzo base*/
const basePrice = userKm.value * priceKm
console.log(basePrice)

let finalprice = basePrice
console.log(finalprice)













