// 🕒 Display Date and Time in Footer
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    if (dateTimeElement) {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        dateTimeElement.textContent = `Current Date & Time: ${formattedDateTime}`;
    }
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// 🚀 Scroll-to-Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Ensure scroll-to-top button only appears when scrolling down
window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scroll-top');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});
