/*
Copyright WARKS.DEV Contributors.
SPDX-License-Identifier: MIT
*/

const targetDate = new Date(document.getElementById("countdown").dataset.utcDateTime).getTime();

Date.prototype.getUTCTime = function() { 
    return new Date(
        this.getUTCFullYear(),
        this.getUTCMonth(),
        this.getUTCDate(),
        this.getUTCHours(),
        this.getUTCMinutes(), 
        this.getUTCSeconds()
    ).getTime(); 
}

function updateCountdown() {

    const now = new Date().getUTCTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        document.getElementById('days').textContent = "00";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown , 1000);