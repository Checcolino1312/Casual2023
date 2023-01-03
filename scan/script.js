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
populateArray(pagine, 'https://checcolino1312.github.io/Casual2023/file.txt', () => {
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
