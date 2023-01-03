function populateArray(array, fileURL, callback) {
  fetch(fileURL)
    .then((response) => response.text())
    .then((text) => {
      // Suddividi il testo in elementi dell'array utilizzando il carattere di nuova riga come delimitatore
      array.push(...text.split('\n'));
      callback();
    });
}

// Crea un nuovo array vuoto
let pagine = [];

// Popola l'array con il contenuto del file di testo
populateArray(pagine, 'https://docs.google.com/document/d/e/2PACX-1vR7jWmRaONaPOTWHk5OaHjQyidoxOGa6blErdCX3SGx8Ie9Bfq4mo0Fc18cLP68V0OhC2Trr_TeleCU/pub', () => {
  console.log(pagine);
});

let myWindow;
let redirectButton = document.querySelector(".redirect");


function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    return Math.floor(step2) + min;
}


let openRandomContent = function () {
    openWindow();
    redirectButton.classList.add("inactive");
    redirectButton.textContent = 'SCAN AGAIN';
    redirectButton.disabled = true;
    // redirectButton.removeEventListener('click', openRandomContent);
    //closeWindow();
};

redirectButton.addEventListener('click', openRandomContent);

function openWindow() {
    let index = getRandomNumber(0, pagine.length - 1);
    let result = pagine[index];
    window.open(result);

}

function closeWindow() {
    window.close('', '_parent', '');
};
