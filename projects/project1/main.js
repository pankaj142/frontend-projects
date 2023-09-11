const modalContainer = document.querySelector('.modal-cont');
const textArea = document.querySelector('.textarea-cont');
const addTicketBtn = document.querySelector('.add-btn');
const deleteTicketBtn = document.querySelector('.remove-btn');
const deleteIcon = document.querySelector('.fa-trash')
const colorModalList = document.querySelectorAll('.color_modal');
const mainContainer = document.querySelector('.main-cont');
const colorArray = ["red", "blue", "green", "purple"];
const priorityColorsArr = document.querySelectorAll('.color');

let deleteFlag = false;

/***********************************   app level handlers  ***********************************/

// show modal to add new ticket
addTicketBtn.addEventListener('click', function(e){
    modalContainer.style.display  = "flex";
})

// Modal color selector - set color of new ticket functionality when modal appears 
for(let i=0;i<colorModalList.length; i++){
    colorModalList[i].addEventListener('click', function(e){
        let selectedColor = colorModalList[i].getAttribute('color');
        // console.log("selected color",selectedColor)

        for(let i=0;i<colorModalList.length;i++){
            let currentColor = colorModalList[i].getAttribute('color');
            // console.log("currentColor", currentColor)
            if(currentColor !== selectedColor){
                colorModalList[i].classList.remove('selected');
            }else{ 
                colorModalList[i].classList.add('selected');
            }
        }
    })
}

// filter tickets functionality - when user click on toolbar color
for(let i=0; i<priorityColorsArr.length; i++){
    // handle single click - show only tickets of selected color
    priorityColorsArr[i].addEventListener('click', function(e){
        // add highligh border to the selected color in toolbar
        for(let j=0; j< priorityColorsArr.length; j++){
            priorityColorsArr[j].classList.remove("selected");
        }
        priorityColorsArr[i].classList.add("selected");
        
        // filter tickets
        let selectedColor = priorityColorsArr[i].classList[1];
        filterTickets(selectedColor);
    })

    // handle double click - show all tickets
    priorityColorsArr[i].addEventListener('dblclick', function(e){
        // remove highligh border from all colors in toolbar
        for(let j=0; j< priorityColorsArr.length; j++){
            priorityColorsArr[j].classList.remove("selected");
        }

        // show all tickets
        showAllTickets();
    })
}

// new ticket create functionality - when user press Enter key on textArea of modal 
textArea.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
        // get text and get selected color
        let text = textArea.value;
        let colorSelected = modalContainer.querySelector('.selected')
        colorSelected = colorSelected.getAttribute('color');

        // create task
        createTask(text,colorSelected);

        // clear text area and set default color in modal
        textArea.value = "";
        setDefaultModalColor();

        // hide the modal
        modalContainer.style.display = "none";
    }
})

// delete ticket functionality 
deleteTicketBtn.addEventListener("click", function(e){
    // prompt("hello", "dddddddddddd")

    if(deleteFlag){
        deleteIcon.style.color = 'black';
        deleteFlag = false;
    }else{
        deleteIcon.style.color = 'red';
        deleteFlag = true;
    }
})

/***********************************   helper functions  ***********************************/  

function setDefaultModalColor(){
    for(let i=0;i<colorModalList.length;i++){
        let currentColor = colorModalList[i].getAttribute('color');
        if(currentColor !== 'red'){
            colorModalList[i].classList.remove('selected');
        }else{ 
            colorModalList[i].classList.add('selected');
        }
    }
}

function createTask(text, colorSelected){
    const uid = new ShortUniqueId();

    // create new ticket
    let ticketContainer = document.createElement('div');
    ticketContainer.setAttribute('class', 'ticket-cont');
    // this way of adding new node is not the best solution 
    ticketContainer.innerHTML = 
        `<div class="ticket-color ${colorSelected}"></div>
         <div class="ticket-id">#${uid.rnd()}</div>
         <div class="ticket-area">${text} </div>
         <i class="fa-solid fa-lock lock_icon"></i>
        `;

    // add new ticket
    mainContainer.appendChild(ticketContainer);

    // handle lock unlock functionality
    const lockIcon = ticketContainer.querySelector('.lock_icon');
    const textArea = ticketContainer.querySelector('.ticket-area');
    handleLockUnlockTicket(lockIcon, textArea);

    // handle color change
    const ticketColor = ticketContainer.querySelector('.ticket-color');
    handleColorChange(ticketColor);

    // handle delete ticket 
    handleTicketDelete(ticketContainer);
}

function handleLockUnlockTicket(lockIcon, textArea){
    lockIcon.addEventListener('click', function(){
        if(lockIcon.classList.contains('fa-lock')){ // lock icon present
            // change lock icon to unlock icon
            lockIcon.classList.remove('fa-lock');
            lockIcon.classList.add('fa-lock-open');
            // make textarea editable
            textArea.setAttribute('contentEditable', 'true');
        }else{ // unlock icon present
            // change unlock icon to lock
            lockIcon.classList.remove('fa-lock-open');
            lockIcon.classList.add('fa-lock');
            // make textarea non editable
            textArea.setAttribute('contentEditable', 'false');
        }
    })
}

function handleColorChange(ticketColor) {
    // on the ticket, when user click on color then color should osciallate 
    ticketColor.addEventListener('click', function(){
        const currentColor = ticketColor.classList[1];
        //    0       1        2        3
        // ["red", "blue", "green", "purple"]
        
        const colorIndex = colorArray.indexOf(currentColor)
        const newColor = colorArray[(colorIndex + 1 ) %4];
        ticketColor.classList.remove(currentColor);
        ticketColor.classList.add(newColor)
    })
}

function handleTicketDelete(ticketContainer){
    ticketContainer.addEventListener("click", function(e){
        if(deleteFlag){
            let res = confirm("Do you want to delete this ticket?")
            if(res){
                ticketContainer.remove()
            }
        }
    })
}

function filterTickets(selectedColor){
    const tickets = document.querySelectorAll(".ticket-cont");
    for(let i=0; i<tickets.length; i++){
        const currentColor = tickets[i].querySelector('.ticket-color').classList[1];
        if(selectedColor !== currentColor){
            tickets[i].style.display = "none";
        }else{
            tickets[i].style.display = "block";
        }
    }
}

function showAllTickets(){
    const tickets = document.querySelectorAll(".ticket-cont");
    for(let i=0; i<tickets.length; i++){
        tickets[i].style.display = "block";
    }
}