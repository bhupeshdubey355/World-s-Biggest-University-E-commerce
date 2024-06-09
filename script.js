let navitems = document.getElementById("nav-items")

function showmenu(){
    navitems.style.right = "0";
}
function hidemenu(){
    navitems.style.right = "-200px";
}








    
(function() {
    "bhupeshdubey7440@gmail.com".init("bhupeshdubey7440@gmail.com");  // Replace with your EmailJS user ID
})();

// Save form data to LocalStorage
document.getElementById('contactForm').addEventListener('input', function() {
    localStorage.setItem('contactForm', JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }));
});

// Load form data from LocalStorage
window.addEventListener('load', function() {
    const savedData = JSON.parse(localStorage.getItem('contactForm'));
    if (savedData) {
        document.getElementById('name').value = savedData.name;
        document.getElementById('email').value = savedData.email;
        document.getElementById('subject').value = savedData.subject;
        document.getElementById('message').value = savedData.message;
    }
});

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    "bhupeshdubey7440@gmail.com".init("bhupeshdubey7440@gmail.com");  // Replace with your EmailJS user ID
    
    "bhupeshdubey7440@gmail.com".send('bhupeshdubey7440@gmail.com',templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for contacting us. We will get back to you shortly.');
            localStorage.removeItem('contactForm');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });
});


