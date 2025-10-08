const userAgeQ = parseInt(prompt("Inserisdi la tua età"));
const userKmQ = parseFloat(prompt("Quanti km intendi percorrere?"));

// Costo base
const travelKmCost = 0.21 * userKmQ;
let discount = 0;

// Seleziono il paragrafo
const overAllPrice = document.getElementById('overall_cost');
const selectedText = document.getElementById('selected_text')

// Calcolo sconto
if (userAgeQ <= 17) {
    discount = travelKmCost * 0.2;

    selectedText.innerText = 'Sei minorenne ed hai diritto ad uno sconto del 20 %';

} else if (userAgeQ >= 65) {
    discount = travelKmCost * 0.4;

    selectedText.innerText = 'Sei UN SENIOR hai diritto ad uno sconto del 40 %';
} else {
    discount = 0;
    selectedText.innerText = 'Biglietto normale';
}

// Calcolo prezzo finale DOPO aver aggiornato discount
const overAllTravelCost = travelKmCost - discount;

// Scrivo il prezzo nella pagina
overAllPrice.innerText = `Il tuo costo finale €${overAllTravelCost.toFixed(2)}`;