// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const targetId = this.getAttribute('href'); // Get the target section id
    const targetSection = document.querySelector(targetId); // Get the target section element

    // Scroll to the section smoothly
    window.scrollTo({
      top: targetSection.offsetTop - 60, // Adjust for the header height if needed
      behavior: 'smooth'
    });
  });
});

// Highlight active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Function to remove active class from all nav links
function removeActiveClasses() {
  navLinks.forEach(link => {
    link.classList.remove('active'); // Custom class for active link
  });
}

// Function to add active class to the corresponding nav link
function highlightActiveLink() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 70; // Adjust for header height

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      const currentId = section.getAttribute('id');
      const currentLink = document.querySelector(`nav a[href="#${currentId}"]`);
      removeActiveClasses();
      currentLink.classList.add('active');
    }
  });
}

// Listen for scroll events to highlight the active nav link
window.addEventListener('scroll', highlightActiveLink);