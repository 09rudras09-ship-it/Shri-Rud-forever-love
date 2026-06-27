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

const startDate = new Date("2025-03-10");

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
