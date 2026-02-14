// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const text = "Ariq";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150); // Lebih lambat untuk efek lebih smooth
    }
}
typeWriter();

// Fade-in on Scroll with Stagger
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200); // Stagger animasi
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});