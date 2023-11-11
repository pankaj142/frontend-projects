console.log("carousel js")

const slides = document.querySelectorAll(".slide")
let counter = 0;
let imagesCount = 4;
console.log(slides)

slides.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`;
})

const slideImage = () =>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })   
}

const goNext = () => {
    if(counter == imagesCount -1){
        counter = -1;
    }
    console.log("next")
    counter++;
    slideImage();
}

const goPrev = () => {
    if(counter == 0){
        counter = imagesCount;
    }
    console.log("next")
    counter--;
    slideImage();
}