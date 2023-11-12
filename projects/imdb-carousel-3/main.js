const buttons = document.querySelectorAll(".carousel-btn");
let carousel = document.querySelector("#carousel-container");
let slides = carousel.querySelectorAll(".slide");
let slidesCount = slides.length;
let nextIndex = 0;
let currentIndex = 0;

const updateCurrentActiveSlideIndex = () => {
    // get the index of current active slide
    for(let i=0; i<slidesCount;i++){
        if(slides[i].classList.contains('active')){
            currentIndex = i;
            break;
        }
    }
}

const changeSlide = () => {
    // remove the active class from current slide and add to next slide
    slides[currentIndex].classList.remove("active");
    slides[nextIndex].classList.add("active");
}

buttons.forEach((button)=>{
    button.addEventListener("click", (e) => {
        let buttonType = e.target.id; 
        updateCurrentActiveSlideIndex();

        if(buttonType === "btn-prev"){
            nextIndex = currentIndex > 0 ? currentIndex - 1 : slidesCount - 1 ; 
        }else if(buttonType === "btn-next"){
            nextIndex = currentIndex < slidesCount - 1 ? currentIndex + 1 : 0
        }

        changeSlide();
    })
})

const autoSlide = () => {
    updateCurrentActiveSlideIndex();
    nextIndex = currentIndex < slidesCount - 1 ? currentIndex + 1 : 0

    // remove the active class from current slide and add to next slide
    changeSlide();
}

// auto slide change
setInterval(() => {
    autoSlide()
}, 3000)