
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

// Throttling Logic
function throttle(cb, delay=2000){
    let flag = true; // set true first time only
    console.log("throttle ")
    
    // return this inner fun, which will be passed as "keypress" event handler 
    return function(){ 
        if(flag == true){
            cb(); // call API 
            flag = false; // after API call called, set flag to "false", so that this API will only be called next time after X delay seconds 
            
            setTimeout(function(){
                flag = true; //after X sec delay passed set flag "true", so that on next keypressed event API call will be called
            }, delay)
        }
    }
}

// "throttle" function is executed only one time
// after first execution of "throttle" fun, it returns the inner function
// that inner fun is stored in "throttled" fun
// this "throttled" fun is passed as event hanlder for "keypress" event
// that means the "throttled" fun i.e. the inner fun of "throttle" fun is called when "keypress" event happens

// throttle fun =>
//      flag is set to true for the first time
//      inner fun =>
//            check if flag === true
//                  a. callback(API call) is executed
//                  b. set flag to false
//                  c. wait for X delay seconds, and set flag to true ( so that in the next keypress event API call is made )


let throttled = throttle(makeApiCall, delay)

inputElm.addEventListener("keypress", throttled)
// End

delayBtn.addEventListener("click", function(){
    localStorage.setItem("delay_time", delayElem.value)
    window.location.reload();
    console.log("delay_time after ",localStorage.getItem("delay_time"))
})
