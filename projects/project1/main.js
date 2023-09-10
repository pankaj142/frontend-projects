const modalContainer = document.querySelector('.modal-cont');
const textArea = document.querySelector('.textarea-cont');
const addTicketBtn = document.querySelector('.add-btn');
const colorModalList = document.querySelectorAll('.color_modal');
const mainContainer = document.querySelector('.main-cont');
const colorArray = ["red", "blue", "green", "purple"];


// Modal color selector 
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

addTicketBtn.addEventListener('click', function(e){
    modalContainer.style.visibility = "visible";
})

textArea.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
        // get text and get selected color
        let text = textArea.value;
        let colorSelected = document.querySelector('.selected')
        colorSelected = colorSelected.getAttribute('color');

        // create task
        createTask(text,colorSelected);

        // clear text area and set default color in modal
        textArea.value = "";
        setDefaultModalColor();

        // hide the modal
        modalContainer.style.visibility = "hidden";
    }
})

// modalContainer.addEventListener('click', function(e){
//     console.log("modal clicked")
// })

function setDefaultModalColor(){
    for(let i=0;i<colorModalList.length;i++){
        let currentColor = colorModalList[i].getAttribute('color');
        // console.log("currentColor", currentColor)
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