let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the navigation bar
        document.querySelector('nav').style.top = '0';
    } else {
        // Scrolling down, hide the navigation bar
        document.querySelector('nav').style.top = '-80px'; // Adjust the height of the navigation bar if needed
    }
    prevScrollPos = currentScrollPos;
});





