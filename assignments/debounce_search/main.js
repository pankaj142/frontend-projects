
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
    
    // instead of making API call, we are just adding a item in search history list
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


// "debounce" function is executed only one time
// after first execution of "debounce" fun, it returns the inner function
// that inner fun is stored in "debounced" fun
// this "debounced" fun is passed as event hanlder for "keypress" event
// that means the "debounced" fun i.e. the inner fun of "debounce" fun is called when "keypress" event happens

// debounce fun =>
//      declare timerId for the first time
//      returns inner fun
//          inner fun =>
//               a. clear timerId is present 
//               b. set new timerId with new setTimeout
//               c. this setTimeout will be executed the callback (API call) after X delay seconds


delayBtn.addEventListener("click", function(){
    localStorage.setItem("delay_time", delayElem.value)
    window.location.reload();
    console.log("delay_time after ",localStorage.getItem("delay_time"))
})

