var box = document.querySelector('.box');

function handleScroll() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 150) {
        box.style.top = '50px';
    } else {
        box.style.top = '230px';
    }
}

window.addEventListener('scroll', handleScroll);
