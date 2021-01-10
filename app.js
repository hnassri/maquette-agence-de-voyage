

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

function resize_image(){
    let sizeWindow = window.innerWidth;
    let x = 6;
    if(sizeWindow >= 1200){

        //Slides images
        slides.forEach(function(element) {
            element.querySelector("img").src = `assets/${x}.jpg`;
            x++;
        })

        //Logo Safy from navbar
        document.getElementById('logo-nav-Safy').src = `assets/18-2.jpg.png`;

        //Flag images
        document.querySelectorAll(".flag-country").forEach(function(element, index) {
            element.src = `assets/${index+3}.jpg`;
        })

    }else if (sizeWindow >= 900){  

        //Slides images
        slides.forEach(function(element) {
            element.querySelector("img").src = `assets/${x}-2.jpg`;
            x++;
        })

        //Logo Safy from navbar
        document.getElementById('logo-nav-Safy').src = `assets/18-2.jpg.png`;

        //Flag images
        document.querySelectorAll(".flag-country").forEach(function(element, index) {
            element.src = `assets/${index+3}-2.jpg`;
        })
    }else {

        //Slides images
        slides.forEach(function(element) {
            element.querySelector("img").src = `assets/${x}-3.jpg`;
            x++;
        })

        //Logo Safy from navbar
        document.getElementById('logo-nav-Safy').src = `assets/18-3.jpg.png`;

        //Flag images
        document.querySelectorAll(".flag-country").forEach(function(element, index) {
            element.src = `assets/${index+3}-3.jpg`;
        })
    }
    x = 6;
    console.log(sizeWindow)
}
resize_image();
window.addEventListener("resize" , resize_image);