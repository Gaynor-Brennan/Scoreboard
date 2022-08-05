let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")
let scoreHome = 0
let scoreGuest = 0

// New Game
// Highlight the Leader
// PERIOD, FOULS , TIMER
// change the design


function homeIncrementByOne() {
    scoreHome += 1
    countHome.textContent = scoreHome
}

function homeIncrementByTwo() {
    scoreHome += 2
    countHome.textContent = scoreHome
}

function homeIncrementByThree() {
    scoreHome += 3
    countHome.textContent = scoreHome
}


function guestIncrementByOne() {
    scoreGuest += 1
    countGuest.textContent = scoreGuest
}

function guestIncrementByTwo() {
    scoreGuest += 2
    countGuest.textContent = scoreGuest
}

function guestIncrementByThree() {
    scoreGuest += 3
    countGuest.textContent = scoreGuest
}