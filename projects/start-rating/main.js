const ratingContainer = document.getElementById("rating-container")
const stars = document.querySelectorAll(".star");
const rating_count = document.querySelector("#rating_count");

ratingContainer.addEventListener("click", function(e){
    let selectedIndex = e.target.getAttribute("data-index");
    console.log("selectedIndex", selectedIndex)
    for(let i=0;i<stars.length;i++){
        if(i <= selectedIndex){
            stars[i].classList.add("selected")
        }else{
            stars[i].classList.remove("selected")
        }
    }
    rating_count.textContent = Number(selectedIndex) + 1
})
