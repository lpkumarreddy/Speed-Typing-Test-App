let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

let url = "https://apis.ccbp.in/random-quote";
let timerId;
let counter = 0;

function startTimer() {
    counter = 0;
    timerId = setInterval(function() {
        counter += 1;
        timerEl.textContent = counter;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

function generateQuote() {
    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(jsondata) {
        let quote = jsondata.content;
        quoteDisplayEl.textContent = quote;
        spinnerEl.classList.add("d-none");
    });
}

function checkResult() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        stopTimer();
        resultEl.textContent = "You made it in " + timerEl.textContent + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
}

function resetTest() {
    stopTimer();
    generateQuote();
    startTimer();
    quoteInputEl.value = "";
    resultEl.textContent = "";
}

submitBtnEl.onclick = checkResult;
resetBtnEl.onclick = resetTest;

generateQuote();
startTimer();