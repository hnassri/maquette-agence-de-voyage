/* 
    DROPDOWNS 
*/

document.querySelectorAll(".dropdown").forEach(function(element) {
    element.addEventListener("click", function(){
        const i = this.querySelector('i');
        if(!i.classList.contains("isDropdown")){
            this.querySelector(".dropdown-content").style.display = "block";
            i.classList.add("isDropdown");
        }else {
            this.querySelector(".dropdown-content").style.display = "none";
            i.classList.remove("isDropdown");
        }
        
    })
})

/* 
    Carousel-Slide Shows 
*/
let prevSlide = 0;
let element = 0;

const slides = document.querySelectorAll(".slides");

function showSlides(){
    
    slides[prevSlide].style.display = "none";
    
    if (element >= 6){
        element = 0;
    }
    slides[element].style.display = "block";
    prevSlide = element;
    element++;
}
showSlides();
setInterval(showSlides, 3000);