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

const searchInput = document.getElementById("searchProject");

searchInput.addEventListener("input", function(){

    const value = searchInput.value.toLowerCase();

    const projects = document.querySelectorAll(".projects-box");

    projects.forEach(project => {

        const title = project.querySelector("h4").textContent.toLowerCase();

        if(title.includes(value)){
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

    });

});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }

    });

});

revealElements.forEach(el => observer.observe(el));

const filterButtons = document.querySelectorAll(".project-filter button");
const projects = document.querySelectorAll(".projects-box");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.getAttribute("data-filter");

        projects.forEach(project => {

            if(filter === "all" || project.classList.contains(filter)){
                project.style.display = "block";
            }else{
                project.style.display = "none";
            }

        });

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

    });

});

const preview = document.getElementById("projectPreview");
const previewImage = document.getElementById("previewImage");
const closePreview = document.getElementById("closePreview");

document.querySelectorAll(".preview-img").forEach(img=>{

img.addEventListener("click",()=>{

preview.classList.add("active");
previewImage.src = img.src;

});

});

closePreview.addEventListener("click",()=>{
preview.classList.remove("active");
});
