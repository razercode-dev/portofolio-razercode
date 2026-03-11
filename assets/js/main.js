let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

let sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            current = id;
        }
    });

    navLinks.forEach(links => {
        links.classList.remove('active');
        // Use template literals for safe selector
        if(links.getAttribute('href').includes(current)) {
            links.classList.add('active');
        }
    });
});
