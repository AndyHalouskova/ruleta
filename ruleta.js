const number = Number(prompt('Vlozte cislo od 0 do 36.'));
const remainder = number % 2;

 if (number == 0) {
    document.body.innerHTML = `<p> ${number} zelená </p>`;
} else if ((number > 0 && number < 11) || (number >= 19 && number <= 28)) {
    if (remainder == 1) {
        document.body.innerHTML += `<p>Zadané číslo ${number} je cervene. </p>`
    } else {
        document.body.innerHTML += `<p>Zadané číslo ${number} je cerne. </p>`
    }  
} else if (number <= 36) {
    if (remainder == 1) {
        document.body.innerHTML += `<p>Zadané číslo ${number} je cerne. </p>`
    } else {
        document.body.innerHTML += `<p>Zadané číslo ${number} je cervene. </p>`
    }
} else {
    document.body.innerHTML += `<p>Invalid number</p>`
}
