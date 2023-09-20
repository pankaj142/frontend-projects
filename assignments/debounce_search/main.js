
const inputElm = document.getElementById("search_input");
const searchHistory = document.querySelector("#search_list");
const delayElem = document.querySelector("#delay_input");
const delayBtn = document.querySelector("#delay_button");

let count = 0;
let delay = 2000; // 2 sec
let delay_time = localStorage.getItem("delay_time");
if(delay_time){
    delay = delay_time;
    delayElem.value = delay_time;
}

function makeApiCall(){
    count++;
    let search_keyword = inputElm.value;
    
    // add new html div elment to search history container
    addNewItem(count, search_keyword)
}

function addNewItem(count, search_keyword){
    let newElem = document.createElement("div");
    newElem.classList.add("history_item")
    let node = document.createTextNode(`${count}. Api called with keyword => ${search_keyword}`);
    newElem.appendChild(node);
    searchHistory.appendChild(newElem)
}

// Deboucing Logic
function debounce(cb, delay=2000){
    let timerId;
    return function(){
        clearInterval(timerId);
        timerId = setTimeout(cb, delay);
    }
}

let debounced = debounce(makeApiCall, delay)

inputElm.addEventListener("keypress", debounced)
// End

delayBtn.addEventListener("click", function(){
    localStorage.setItem("delay_time", delayElem.value)
    window.location.reload();
    console.log("delay_time after ",localStorage.getItem("delay_time"))
})

