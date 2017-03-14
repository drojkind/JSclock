const secondHand = document.querySelector('.secondHand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    secondHand.style.background = `blue`;
    console.log(seconds * 6);
}

setInterval(setDate, 1000);
