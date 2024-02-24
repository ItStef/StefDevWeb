// Get all the links in the navbar
const links = document.querySelectorAll("#navbar a");

// Add a click event listener to each link
links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the default action

        // Scroll to the target section
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});