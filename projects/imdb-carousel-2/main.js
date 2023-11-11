const slides = document.querySelectorAll(".slide")
let counter = 0;
let imagesCount = 4;
console.log(slides)

slides.forEach((slide, index)=>{
    slide.style.bottom = `${index * 100}%`;
})

const slideImage = () =>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateY(${counter * 100}%)`
    })   
}

const goNext = () => {
    console.log("next")
    if(counter == imagesCount -1){
        counter = -1;
    }
    counter++;
    slideImage();
}

const goPrev = () => {
    console.log("next")
    if(counter == 0){
        counter = imagesCount;
    }
    counter--;
    slideImage();
}