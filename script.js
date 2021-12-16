const span = document.querySelector("#value");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

let count = 0;

decreaseBtn.addEventListener("click", function() {
    count--
    setColorAndSpan()
})

resetBtn.addEventListener("click", function() {
    count = 0;
    setColorAndSpan()
})

increaseBtn.addEventListener("click", function() {
    count++
    setColorAndSpan()
})

function setColorAndSpan () {
    if (count < 0) {
        span.style.color = "red"
    } else if (count > 0) {
        span.style.color = "green"
    } else {
        span.style.color = "black"
    }
    span.innerText = count;
}

