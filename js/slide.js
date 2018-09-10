var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var y = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < y.length; i++) {
       y[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > y.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeslide", "");
    }
    y[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activeslide";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
