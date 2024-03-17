function toggleNavMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// about
document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.getElementById('about-section');
    var heading = document.querySelector('.introduction-section h2');
    var paragraph = document.querySelector('.introduction-section p');
  
    function handleScroll() {
      var windowHeight = window.innerHeight;
      var sectionTop = aboutSection.getBoundingClientRect().top;
  
      // Check if the section is in view
      if (sectionTop < windowHeight * 0.75 && sectionTop > -aboutSection.clientHeight) {
        // Add animation classes
        heading.classList.add('animate');
        paragraph.classList.add('animate');
      } else {
        // Remove animation classes if not in view
        heading.classList.remove('animate');
        paragraph.classList.remove('animate');
      }
    }
  
    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);
  
    // Trigger animation when page loads if section is already in view
    handleScroll();
  });

  
//   grid gallery


  