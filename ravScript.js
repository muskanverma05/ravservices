let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
  }

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

 
const modal = document.getElementById('myModal');
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');

// When the user clicks the button, open the modal
openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

// When the user clicks the close button, close the modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

// When the user clicks anywhere outside the modal, close it
window.addEventListener('click', (event) => {
    if(event.target === modal ) {
        modal.style.display = 'none';
    }   
});

function toggleHeartColor(icon) {
    icon.classList.toggle('red-heart');
}

function sendMail(event) {
  event.preventDefault(); // Prevents form from reloading

  const name = document.getElementById('contactForm').elements['Name'].value;
  const email = document.getElementById('contactForm').elements['Email'].value;
  const number = document.getElementById('contactForm').elements['Number'].value;
  const message = document.getElementById('contactForm').elements['Message'].value;

  // Phone validation
  if (!/^\d{10,}$/.test(number)) {
      document.getElementById('numberError').textContent = 'Please enter a valid phone number (At least 10 digits).';
      showErrorMessage();
      return;
  } else {
      document.getElementById('numberError').textContent = ''; // Clear any previous error message
  }

  const params = { name, email, number, message };

  emailjs.send("service_wy0g7mt", "template_xp1t7dr", params)
      .then(function (response) {
          showSuccessMessage();
          document.getElementById('contactForm').reset();
      })
      .catch(function (error) {
          showErrorMessage();
      });
}

function showSuccessMessage() {
  const successDiv = document.getElementById('submitMessage');
  successDiv.textContent = '✅ Thank you for contacting us!';
  successDiv.style.color = '#03fc03';
  successDiv.style.display = 'block';
}

function showErrorMessage() {
  const errorDiv = document.getElementById('submitMessage');
  errorDiv.textContent = '❌ Failed to send message. Please try again.';
  errorDiv.style.color = '#ff0019';
  errorDiv.style.display = 'block';
}

// Services modal
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");
var modal7 = document.getElementById("modal7");
var modal8 = document.getElementById("modal8");
var modal9 = document.getElementById("modal9");
var modal10 = document.getElementById("modal10");
var modal11 = document.getElementById("modal11");
var modal12 = document.getElementById("modal12");
var modal13 = document.getElementById("modal13");

// Function to open a specific modal
function openModal(modalId) {
    if (modalId === 1) {
        modal1.style.display = 'block';
    } else if (modalId === 2) {
        modal2.style.display = 'block';
    } else if (modalId === 3) {
        modal3.style.display = 'block';
    } else if (modalId === 4) {
        modal4.style.display = 'block';
    } else if (modalId === 5) {
       modal5.style.display = 'block';
    } else if (modalId === 6) {
      modal6.style.display = 'block';
    } else if (modalId === 7) {
      modal7.style.display = 'block';
    } else if (modalId === 8) {
      modal8.style.display = 'block';
    } else if (modalId === 9) {
      modal9.style.display = 'block';
    } else if (modalId === 10) {
      modal10.style.display = 'block';
    } else if (modalId === 11) {
      modal11.style.display = 'block';
    } else if (modalId === 12) {
      modal12.style.display = 'block';
    } else if (modalId === 13) {
      modal13.style.display = 'block';
    }
}
// Function to open a specific modal
function openModal(modalId) {
  // Hide all modals
  closeModal();
  // Show the selected modal
  var modal = document.getElementById("modal" + modalId);
  if (modal) {
      modal.style.display = 'block';
  }
}

// Function to close all modals
function closeModal() {
  var modals = [modal1, modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9, modal10, modal11, modal12, modal13];
  for (var i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
  }
}

// Event Listener for close buttons
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", closeModal);
}

// Function to navigate to the previous modal
function prevModal(currentModal) {
  var preModal = currentModal - 1;
  if (preModal < 1) {
      preModal = 9; // Wrap around to the last modal
  }
  openModal(preModal);
}

// Function to navigate to next modal
function nextModal(currentModal) {
  var nextModal = currentModal + 1;
  if (nextModal > 9) {
      nextModal = 1; // Wrap around to the first modal
  }
  openModal(nextModal);
}
