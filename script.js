window.addEventListener('scroll', reveal);
window.addEventListener('DOMContentLoaded', winLoaded);
window.addEventListener('keypress', function(event){
    const ele = document.querySelector("#section2");

    const eleRect = ele.getBoundingClientRect();
    const eleY = eleRect.top + window.scrollY;

    // this.window.scrollTo({
    //     top: eleY,
    //     behaviour: "smooth"
    // });

    ele.scrollIntoView({behavior: 'smooth'});
});
document.getElementById("swipeUp").addEventListener("click", function() {
    // Your code here
    const ele = document.querySelector("#section2");
    ele.scrollIntoView({behavior: 'smooth'});
});

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (let index = 0; index < reveals.length; index++) {
        
        var windowHeight = window.innerHeight;
        var revealTop = reveals[index].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight) {
            // add them to the active class to make them show
            reveals[index].classList.add('active');
        }
        else{
            // remove them from the active class to make them disappear
            reveals[index].classList.remove('active');
        }
    }
}

function winLoaded() {
    var onLoadeds = document.querySelectorAll('.on-load');

    for (let index = 0; index < onLoadeds.length; index++) {
        var onLoaded = onLoadeds[index];
        
        onLoaded.classList.add('loaded');
    }
}