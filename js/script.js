"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const playSound = document.getElementById("playSound");
    const audio = document.getElementById("myAudio");

    // hides pop-up on load
    popup.classList.add("hidden");

    // Shows pop-up after 2 seconds
    setTimeout(() => {
        popup.classList.remove("hidden");
    }, 2000);

    // closes pop-up
    closePopup.addEventListener("click", function () {
        popup.classList.add("hidden");
    });

    // play and pause sound
    playSound.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playSound.innerHTML = '<img src="/img/pause.png" alt="Pause" width="20">';
        } else {
            audio.pause();
            playSound.innerHTML = '<img src="/img/play.png" alt="Play" width="20">';
        }
    });
    
});


document.addEventListener("DOMContentLoaded", function () {
    const chapters = document.querySelectorAll('.chapter'); // Korrekt variabelnavn

    window.addEventListener('scroll', function () {
        chapters.forEach(chapter => {  // Brug `chapters` i stedet for `sections`
            const rect = chapter.getBoundingClientRect();
            const text = chapter.querySelector('.fade-text'); // Finder teksten i hver sektion

            if (text && rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                text.classList.add('fade-in'); // Tilføjer fade-in klassen, hvis betingelsen er opfyldt
            }
        });
    });
});



// Modal logic
const correctAnswerPopup = document.getElementById("correctAnswerPopup");
const closePopup = document.getElementById("closePopupAswer");  // Corrected id

document.getElementById("tjekSvar").addEventListener("click", function () {
    const userInput = document.getElementById("svarInput").value;
    const feedback = document.getElementById("feedback");

    if (userInput == 4) {
        feedback.textContent = "✅ Right answer!";
        feedback.style.color = "green";
        
        // Show the modal 
        correctAnswerPopup.classList.remove("hiddenAnswer");
    } else {
        feedback.textContent = "❌ Wrong Try again!";
        feedback.style.color = "red";
    }
});

// Close the modal when the "Close" button is clicked
closePopup.addEventListener("click", function () {
    correctAnswerPopup.classList.add("hiddenAnswer");
});

