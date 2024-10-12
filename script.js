/// Get elements for Will Attend modal
const willGoBtn = document.getElementById('will-go-btn');
const modal = document.getElementById('rsvp-modal');
const closeModal = document.querySelectorAll('.close')[0];

// Get elements for Will Not Attend modal
const willNotGoBtn = document.getElementById('will-not-go-btn');
const notGoModal = document.getElementById('rsvp-not-go-modal');
const closeNotGoModal = document.querySelectorAll('.close')[1];

// Show modal when 'Will Attend' button is clicked
willGoBtn.addEventListener('click', function() {
    modal.classList.add('visible');
    modal.classList.remove('hidden');
});

// Show modal when 'Will Not Attend' button is clicked
willNotGoBtn.addEventListener('click', function() {
    notGoModal.classList.add('visible');
    notGoModal.classList.remove('hidden');
});

// Close the modals when the 'x' is clicked
closeModal.addEventListener('click', function() {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
});

closeNotGoModal.addEventListener('click', function() {
    notGoModal.classList.remove('visible');
    notGoModal.classList.add('hidden');
});

// Close modals when user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.classList.remove('visible');
        modal.classList.add('hidden');
    }
    if (event.target == notGoModal) {
        notGoModal.classList.remove('visible');
        notGoModal.classList.add('hidden');
    }
});

// Form submission for 'Will Attend' modal
const rsvpForm = document.getElementById('rsvp-form');
rsvpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you ${name} for your Submission! We will contact you at ${email}.`);

    // Close modal
    modal.classList.remove('visible');
    modal.classList.add('hidden');

    // Reset the form
    rsvpForm.reset();
});

// Form submission for 'Will Not Attend' modal
const notGoForm = document.getElementById('not-go-form');
notGoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameNotGo = document.getElementById('name-not-go').value;
    const emailNotGo = document.getElementById('email-not-go').value;
    const reason = document.getElementById('reason').value;

    alert(`Thank you ${nameNotGo} for letting us know. We will contact you at ${emailNotGo}.`);

    // Close modal
    notGoModal.classList.remove('visible');
    notGoModal.classList.add('hidden');

    // Reset the form
    notGoForm.reset();
});

// Scroll trigger for invitation details
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const invitationDetails = document.querySelector('.invitation-details');
    const detailsTop = invitationDetails.offsetTop - window.innerHeight + 100;
    
    if (scrollY > detailsTop) {
        invitationDetails.classList.add('visible');
    }
});

/// Opens link to  gallery 
function openLink() {
    window.location.href = "https://codetheai.github.io/Personalized-Gallery/"; // Redirects in the same tab
}
/// Adjust Font Size Base on window
const header = document.getElementById('invitation-header');
let currentFontSize = 100; // Starting with 100px font size

while (header.scrollWidth > window.innerWidth && currentFontSize > 10) {
    currentFontSize--; // Decrease the font size
    header.style.fontSize = `${currentFontSize}px`;
}
