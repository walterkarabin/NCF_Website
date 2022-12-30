// Get all the sections on the page
var sections = document.querySelectorAll('section');
var section;

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (let index = 0; index < reveals.length; index++) {
        
        var windowHeight = window.pageYOffset || document.documentElement.scrollTop;
        var revealTop = reveals[index].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop <= windowHeight) {
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
    reveal();
    checkScrollPosition();
    console.log(section);
    console.log(document.documentElement.scrollTop);
}

// Check Scroll Position


// Set up a function to check the current scroll position
function checkScrollPosition() {
  // Get the current scroll position of the page
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Loop through each section on the page
  for (var i = 0; i < sections.length; i++) {
    // Get the top position of the current section
    var top = sections[i].offsetTop;

    // If the current scroll position is greater than the top position of the section,
    // it means the user has scrolled past that section
    if (scrollTop >= top) {
        if (i+2<sections.length+1) {
            var secNum = i + 2;
            section = 'section'+secNum;
            changeSwipeText(section);
        }
        else{
            section = 'section'+1;
            changeSwipeText(section);
        }
    }
  }
}

// function to change the text of the swipe text
function changeSwipeText(section) {
    const currentSection = document.getElementById(section);
    const swipeText = document.getElementById('swipeText');
    const arrow = document.getElementById('arrow');
    if(section == 'section1'){
        swipeText.textContent = "Back to top";
        arrow.style.transform = 'rotateZ(180deg)'
    }else{
        swipeText.textContent = currentSection.querySelector('h2').textContent;
        arrow.style.transform = 'rotateZ(0deg)'
    }
}

// function to scroll to specific section
function scrollToSection() {
    const element = document.getElementById(section);
    element.scrollIntoView({behavior: 'smooth'});
}



// Listen for the scroll event on the window
window.addEventListener('scroll', checkScrollPosition);

// event listeners
// On Scroll
window.addEventListener('scroll', reveal);
// On window loaded
window.addEventListener('DOMContentLoaded', winLoaded);

document.getElementById("swipeUp").addEventListener("click", scrollToSection);