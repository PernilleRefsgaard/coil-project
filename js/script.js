"use strict";


let text = document.getElementById("text");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    text.style.marginTop = `${value*2.5}px`

    tree4.style.left = `${value*-3}px`

    tree.style.left = `${value*-3.5}px`

    hill1.style.top = `${value*1}px`

    hill2.style.right = `${value*1}px`

    hill2.style.right = `${value*1}px`

    hill4.style.left = `${value*-1.5}px`

    hill5.style.left = `${value*1.5}px`

    leaf.style.top = `${value*-1.5}px`
})

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


let chapters = document.querySelectorAll('.chapter');

window.addEventListener('scroll', function () {
    chapters.forEach(chapter => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
            chapter.classList.add('visible');
        }
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
        
        // Show the modal instead of alert
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

