let pagine = ['	http://drawing.garden/	 ',
    '	https://www.youtube.com/watch?v=-KNj_ath73Q	 ',
    '	https://www.youtube.com/watch?v=3h7hHr8TPHg	 ',
    '	https://www.youtube.com/watch?v=ZXaSa2vEtF8	 ',
    '	http://lacquerlacquer.com/	 ',
    '	https://www.youtube.com/watch?v=2ZtplZY2NWM	 ',
    '	https://www.youtube.com/watch?v=7HqSRYs0TZI	 ',
    '	https://loopedforinfinity.com	 '];



let myWindow;
let redirectButton = document.querySelector(".redirect");


function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    return Math.floor(step2) + min;
}


let openRandomContent = function () {
    openWindow();
    //redirectButton.classList.add("inactive");
    //redirectButton.textContent = 'SCAN AGAIN';
    //redirectButton.disabled = true;
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
