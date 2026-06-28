const PASSWORD = "10/03/2025";

function checkPassword() {
    const pass = document.getElementById("password").value;

    if (pass === PASSWORD) {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error").innerHTML = "❌ Wrong Password";
    }
}

const startDate = new Date("2025-01-25");

function updateLoveCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const counter = document.getElementById("love-counter");
    if (counter) {
        counter.innerHTML = "❤️ Together for " + days + " Days ❤️";
    }
}

setInterval(updateLoveCounter, 1000);
updateLoveCounter();

function toggleMusic() {
    const music = document.getElementById("bgMusic");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
const hearts =
document.querySelector(".hearts");

for(let i=0;i<25;i++){

let heart=
document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"%";

heart.style.animationDuration=
(5+Math.random()*5)+"s";

heart.style.fontSize=
(15+Math.random()*25)+"px";

hearts.appendChild(heart);

}
