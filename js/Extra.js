//Icon linkers 
document.getElementById('icon1').addEventListener('click', function() {
    window.location.href = 'https://github.com/AirajHussain/Host-Dispatcher'; 
});
document.getElementById('icon2').addEventListener('click', function() {
    window.location.href = 'https://github.com/AirajHussain/Content-Based-Image-Retrieval'; 
});
document.getElementById('icon3').addEventListener('click', function() {
    window.location.href = 'https://github.com/AirajHussain/Mini-Linux-Terminal'; 
});

document.getElementById('icon4').addEventListener('click', function() {
    window.location.href = 'https://github.com/AirajHussain/PassGuard'; 
});

document.getElementById('icon5').addEventListener('click', function() {
    window.location.href = 'https://github.com/AirajHussain/Ontario-Tech-Website-Clone'; 
});


//Icon 1
document.getElementById('icon1').addEventListener('mouseover', function() {
    // Add a cool effect on hover (you can adjust this as needed)
    this.style.opacity = '0.7';
});
document.getElementById('icon1').addEventListener('mouseout', function() {
    // Reset the opacity when mouse leaves
    this.style.opacity = '1';
});

//Icon 2 
document.getElementById('icon2').addEventListener('mouseover', function() {
    // Add a cool effect on hover (you can adjust this as needed)
    this.style.opacity = '0.7';
});
document.getElementById('icon2').addEventListener('mouseout', function() {
    // Reset the opacity when mouse leaves
    this.style.opacity = '1';
});

//Icon 3
document.getElementById('icon3').addEventListener('mouseover', function() {
    // Add a cool effect on hover (you can adjust this as needed)
    this.style.opacity = '0.7';
});
document.getElementById('icon3').addEventListener('mouseout', function() {
    // Reset the opacity when mouse leaves
    this.style.opacity = '1';
});

//Icon 4 

document.getElementById('icon4').addEventListener('mouseover', function() {
    // Add a cool effect on hover (you can adjust this as needed)
    this.style.opacity = '0.7';
});
document.getElementById('icon4').addEventListener('mouseout', function() {
    // Reset the opacity when mouse leaves
    this.style.opacity = '1';
});

//Icon 5 

document.getElementById('icon5').addEventListener('mouseover', function() {
    // Add a cool effect on hover (you can adjust this as needed)
    this.style.opacity = '0.7';
});
document.getElementById('icon5').addEventListener('mouseout', function() {
    // Reset the opacity when mouse leaves
    this.style.opacity = '1';
});

//Added 

document.addEventListener("DOMContentLoaded", function() {
    // Get all sections with the class 'ftco-section'
    var sections = document.querySelectorAll('.ftco-section');

    // Function to check if a section is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Function to check if a section is visible and add the 'fade-in' class
    function checkVisibility() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add('fade-in');
            }
        });
    }

    // Add event listener for scrolling
    window.addEventListener('scroll', function() {
        checkVisibility();
    });

    // Check visibility on page load
    checkVisibility();
});
