const span = document.querySelector("#value");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");
const allBtns = document.querySelectorAll(".btn") //array-like NodeList allBtns.length => 3
//const allBtns = [{decreaseBtn}, {resetBtn}, {increaseBtn}]
let count = 0;

/* for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("click", function(event){
        console.log(event.target, "this is event target")
        const classes = event.target.classList;
        console.log(classes, "this are classes")
        if (classes.contains("decrease")) {
            count--
        } else if (classes.contains("increase")) {
            count ++
        } else {
            count = 0
        }
        setColorAndSpan()
    })
} */

allBtns.forEach(function(mybtn) {
    mybtn.addEventListener("click", function(event){
        console.log(event.target, "this is event target")
        const classes = event.target.classList;
        console.log(classes, "this are classes")
        if (classes.contains("decrease")) {
            count--
        } else if (classes.contains("increase")) {
            count ++
        } else {
            count = 0
        }
        setColorAndSpan()
    })
}) //higher order method that under the hood looping through array



/* 
allBtns.forEach(addEventToBtn)
function addEventToBtn(el) {
    el.addEventListener("click", function(event){
        console.log(event.target, "this is event target")
        const classes = event.target.classList;
        console.log(classes, "this are classes")
        if (classes.contains("decrease")) {
            count--
        } else if (classes.contains("increase")) {
            count ++
        } else {
            count = 0
        }
        setColorAndSpan()
    })
} */


//event is an object


/* decreaseBtn.addEventListener("click", function() {
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
}) */

function setColorAndSpan () {
    if (count < 0) {
        span.style.color = "red"
    } else if (count > 0) {
        span.style.color = "green"
    } else {
        span.style.color = "pink"
    }
    span.innerText = count;
}

