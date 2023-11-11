
const buttons = document.querySelectorAll(".carousel-btn");

const slides = document.querySelectorAll(".slide");

buttons.forEach((button)=>{
    button.addEventListener("click", (e) => {
        let buttonType = e.target.id; 
        let carousel = button.closest("#carousel-container");
        let slides = carousel.querySelectorAll(".slide");

        let currentIndex = 0;
        let nextIndex = 0;
        let slidesCount = slides.length;

        // get the index of current active slide
        for(let i=0; i<slidesCount;i++){
            if(slides[i].classList.contains('active')){
                currentIndex = i;
                break;
            }
        }

        if(buttonType === "btn-prev"){
            nextIndex = currentIndex > 0 ? currentIndex - 1 : slidesCount - 1 ; 
        }else if(buttonType === "btn-next"){
            nextIndex = currentIndex < slidesCount - 1 ? currentIndex + 1 : 0
        }

        // remove the active class from current slide and add to next slide
        slides[currentIndex].classList.remove("active");
        slides[nextIndex].classList.add("active");
    })
})