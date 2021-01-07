/* 
    DROPDOWNS 
*/

document.querySelectorAll(".dropdown").forEach(function(element) {
    element.querySelector("div").addEventListener("click", function(){
        const i = this.querySelector('i');
        if(!i.classList.contains("isDropdown")){
            element.querySelector(".dropdown-content").style.display = "block";
            i.classList.add("isDropdown");
        }else {
            element.querySelector(".dropdown-content").style.display = "none";
            i.classList.remove("isDropdown");
        }
        
    })
})

/* 
    Carousel-Slide Shows 
*/
let prevSlide = 0;
let slideIndex = 0;

const slides = document.querySelectorAll(".slides");
const radioButtons = document.querySelectorAll(".container--radio");

let slideInterval = setInterval(showSlides, 3000);

radioButtons.forEach(function(element, index) {
    element.addEventListener("click", function() {
        slideIndex = index;
        clearInterval(slideInterval);
        showSlides();
        slideInterval = setInterval(showSlides, 3000);
    })
})

document.querySelector(".fa-chevron-left").addEventListener("click", function() {
    slideIndex -= 2;
    clearInterval(slideInterval);
    showSlides();
    slideInterval = setInterval(showSlides, 3000);
})

document.querySelector(".fa-chevron-right").addEventListener("click", function() {
    clearInterval(slideInterval);
    showSlides();
    slideInterval = setInterval(showSlides, 3000);
})

function showSlides(){
    
    slides[prevSlide].style.display = "none";
    
    if (slideIndex >= 6){
        slideIndex = 0;
    }
    if (slideIndex < 0){
        slideIndex = 5;
    }
    
    radioButtons[slideIndex].querySelector("input").checked = true;
    slides[slideIndex].style.display = "block";
    prevSlide = slideIndex;
    slideIndex++;
}
showSlides();
