
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const changeBy = document.getElementById("changeBy");
const counter = document.getElementById("counter_value");
const resetBtn =document.getElementById("reset"); 

incrementBtn.addEventListener("click", function(){
    counter.textContent = Number(counter.textContent) + Number(changeBy.value);
})

decrementBtn.addEventListener("click", function(){
    counter.textContent = Number(counter.textContent) - Number(changeBy.value);
})

resetBtn.addEventListener("click", function(){
    counter.textContent = 0;
})