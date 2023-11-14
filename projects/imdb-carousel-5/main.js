const buttons = document.querySelectorAll(".carousel-btn");
let carousel = document.querySelector("#carousel-container");
let slides = carousel.querySelectorAll(".slide");
let slideDots = document.querySelectorAll(".slide-dot");
let slidesCount = slides.length;
let slideDotsCount = slideDots.length;
let nextIndex = 0;
let currentIndex = 0;
let currentSlideDotIndex = 0;
let nextSlideDotIndex = 0;

const getCurrentActiveSlideIndex = () => {
    // get the index of current slide having "active-slide" class
    for(let i=0; i<slidesCount;i++){
        if(slides[i].classList.contains('active-slide')){
            currentIndex = i;
            break;
        }
    }
}

const getCurrentActiveSlideDotIndex = () =>{
    // get the index of current slide dot having "active-slide-dot" class
    for(let i=0; i<slideDotsCount; i++){
        if(slideDots[i].classList.contains("active-slide-dot")){
            currentSlideDotIndex = i;
            break;
        }
    }
}

const changeSlideDot = () => {
    // remove the "active-slide-dot" class from current slide dot and add to next slide dot
    slideDots[currentSlideDotIndex].classList.remove("active-slide-dot")
    slideDots[nextSlideDotIndex].classList.add("active-slide-dot");
}

const changeSlide = () => {
    // remove the "active-slide" class from current slide and add to next slide
    slides[currentIndex].classList.remove("active-slide");
    slides[nextIndex].classList.add("active-slide");
}

buttons.forEach((button)=>{
    button.addEventListener("click", (e) => {
        let buttonType = e.target.id; 
        getCurrentActiveSlideIndex();  // slide
        getCurrentActiveSlideDotIndex(); // slide dot

        if(buttonType === "btn-prev"){
            nextIndex = currentIndex > 0 ? currentIndex - 1 : slidesCount - 1 ;
            nextSlideDotIndex = currentSlideDotIndex > 0 ? currentSlideDotIndex - 1 : slideDotsCount - 1 ; 
        }else if(buttonType === "btn-next"){
            nextIndex = currentIndex < slidesCount - 1 ? currentIndex + 1 : 0;
            nextSlideDotIndex = currentSlideDotIndex < slideDotsCount - 1 ? currentSlideDotIndex + 1 : 0;
        }

        changeSlide();
        changeSlideDot(); 
    })
})

const autoSlide = () => {
    getCurrentActiveSlideIndex();
    getCurrentActiveSlideDotIndex();

    // slide
    nextIndex = currentIndex < slidesCount - 1 ? currentIndex + 1 : 0;

    // slide dot
    nextSlideDotIndex = currentSlideDotIndex < slideDotsCount - 1 ? currentSlideDotIndex + 1 : 0;

    changeSlide(); // slide
    changeSlideDot(); // slide dot
}

// auto slide change
setInterval(() => {
    autoSlide()
}, 3000)