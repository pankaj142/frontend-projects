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

// use case of Event Bubbling
// we want to listen click event on all star elements
// Instead of adding click event listener to all star elements, we added event lister to parent element of all star elements i.e rating-container
// and event listener is by default capture bubbling phase of its child elements (here star elements)
// so click event on each star element is captured on this rating-container element
// benefits of this - we reduced the number of event listerns to just 1, which we were going to add on each star element, but now we only add one event listener on parent element and done
