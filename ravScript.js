let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    // cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    // cartItem.classList.remove('active');
}

// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () => {
//   cartItem.classList.toggle('active');
//   navbar.classList.remove('active');
//   searchForm.classList.remove('active');
// }

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    // cartItem.classList.remove('active');
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


const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeLabel = document.getElementById('darkModeLabel');

darkModeLabel.addEventListener('change', function() {
    if(darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
        darkModeLabel.title = "Light mode: on";
        localStorage.setItem('darkMode', 'off')
    } 
    else {
        document.body.classList.remove('dark-mode');
        darkModeLabel.title = "Dark mode: on";
        localStorage.setItem('darkMode', 'on')
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

// checkout
// Function to add items to the cart
/* function addToCart(itemName, itemPrice) {
    let cartContainer = document.getElementById('cart-items');
    let existingItem = cartContainer.querySelector(`[data-name="${itemName}"]`);
  
    // Add the cart header if it's not already there
    let cartHeader = document.getElementById('cart-header');
    if (!cartHeader) {
      cartHeader = document.createElement('div');
      cartHeader.id = 'cart-header';
      cartHeader.classList.add('cart-header');
      cartHeader.innerHTML = `
            <div class="header-name">Item Name</div>
            <div class="header-quantity">Quantity</div>
            <div class="header-price">Price</div>
        `;
      cartContainer.appendChild(cartHeader);
    }
  
    if (existingItem) {
      let quantityElement = existingItem.querySelector('.item-quantity span');
      let currentQuantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = currentQuantity + 1;
  
      let totalPriceElement = existingItem.querySelector('.item-total-price span');
      let currentTotalPrice = parseFloat(totalPriceElement.textContent);
      let newTotalPrice = currentTotalPrice + itemPrice;
      totalPriceElement.textContent = newTotalPrice.toFixed(2);
    } else {
      let newItem = document.createElement('div');
      newItem.classList.add('cart-item');
      newItem.setAttribute('data-name', itemName);
  
      newItem.innerHTML = `
            <div class="item-name">${itemName}</div>
            <div class="item-quantity"><span>1</span></div>
            <div class="item-total-price">$<span>${itemPrice.toFixed(2)}</span></div>
            <button class="btn-remove" onclick="removeFromCart(this)">&times;</button>
        `;
  
      cartContainer.appendChild(newItem);
    }
  
    updateCartTotal();
    showNotificationMainScreen(`${itemName} added to cart ☕.`);
  }
  
  // Function to update the total items and prices in the cart
  function updateCartTotal() {
    let cartItems = document.querySelectorAll('.cart-item');
    let totalItems = 0;
    let totalPrice = 0;
  
    cartItems.forEach(function (item) {
      let quantity = parseInt(item.querySelector('.item-quantity span').textContent);
      let price = parseFloat(item.querySelector('.item-total-price span').textContent);
      totalItems += quantity;
      totalPrice += price;
    });
  
    let taxes = totalPrice * 0.10;
    let finalTotal = totalPrice + taxes;
  
    let formattedTotalPrice = totalPrice.toFixed(2);
    let formattedTaxes = taxes.toFixed(2);
    let formattedFinalTotal = finalTotal.toFixed(2);
  
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-price').textContent = '$' + formattedTotalPrice;
    document.getElementById('taxes').textContent = '$' + formattedTaxes;
    document.getElementById('final-total-price').textContent = '$' + formattedFinalTotal;
  
    let emptyCartMessage = document.getElementById('empty-cart-message');
    let cartHeader = document.getElementById('cart-header');
    if (totalItems > 0) {
      emptyCartMessage.style.display = 'none';
      if (cartHeader) cartHeader.style.display = 'flex';
    } else {
      emptyCartMessage.style.display = 'block';
      if (cartHeader) cartHeader.style.display = 'none';
    }
    document.getElementById('cart-badge').textContent = totalItems;
  }
  
  window.onload = function () {
    updateCartTotal();
  };
  
  // Function to remove an item from the cart
  function removeFromCart(button) {
    let item = button.parentNode;
    item.parentNode.removeChild(item);
    updateCartTotal();
  }
  
  // Function to handle checkout
  function checkout() {
    let cartItems = document.querySelectorAll('.cart-item');
    let cartContainer = document.getElementById('cart-items-container');
  
    if (cartItems.length > 0) {
      clearCart();
      showNotificationMainScreen('Purchase done! Your order have been placed.🎉');
    } else {
      showNotificationMainScreen('No items in cart. Please add items.🙁');
    }
  
    setTimeout(function () {
      hideNotificationMainScreen();
      resetUI();
    }, 3000);
  }
  
  // Function to clear the cart
  function clearCart() {
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    updateCartTotal();
  }
  
  // Function to reset UI elements
  function resetUI() {
    let emptyCartMessage = document.getElementById('empty-cart-message');
    emptyCartMessage.style.display = 'block';
  }
  
  // Function to show a notification on the main screen
  function showNotificationMainScreen(message) {
    let notification = document.getElementById('notification-main-screen');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(function () {
      hideNotificationMainScreen();
    }, 3000);
  }
  
  // Function to hide the notification on the main screen
  function hideNotificationMainScreen() {
    let notification = document.getElementById('notification-main-screen');
    notification.style.display = 'none';
  } */ 

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

// document.addEventListener("DOMContentLoaded", function () {
//   // Function to play a pop sound effect
//   function playPopSound() {
//     const audio = document.getElementById('popSound');
//     audio.currentTime = 0;
//     audio.play();
//   }

//  // Attach click event listeners to each 'add to cart' button
//  for (let i = 1; i <= 6; i++) {
//   const button = document.getElementById(`clickButton${i}`);
//   button.addEventListener('click', () => {
//     playPopSound();
//   });
// }
// });

// function openPopup(windowNumber) {
//   closePopup();
//   const popup = document.getElementById('popup' + windowNumber);
//   popup.style.display = 'block';
//   popup.style.animation = 'fadeIn 0.5s forwards, slideIn 0.5s forwards';
//   document.getElementById('overlay').style.display = 'block';
// }

// function closePopup() {
//   var popups = document.querySelectorAll('.popup');
//   popups.forEach(function (popup) {
//     popup.style.display = 'none';
//     popup.style.animation = '';
//   });
//   document.getElementById('overlay').style.display = 'none';
// }


document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-box');
  const paragraphs = document.querySelectorAll('h3');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    paragraphs.forEach(function (paragraph) {
      const text = paragraph.textContent.trim();
      const lowerCaseText = text.toLowerCase();

      // Reset paragraph content to remove previous highlights
      paragraph.innerHTML = text;

      // Highlight matching text
      if (lowerCaseText.includes(searchTerm)) {
        const index = lowerCaseText.indexOf(searchTerm);
        const matchedText = text.substr(index, searchTerm.length);
        const highlighted = `<span class="highlight">${matchedText}</span>`;
        const newText = text.replace(matchedText, highlighted);
        paragraph.innerHTML = newText;
      }
    });
  });
});



// Services modal
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");

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
    }
}

// Function to close all modals
function closeModal() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
  }

// Event Listener for close buttons
var closeButtons = document.getElementById("close");
for ( var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", closeModal);
}

// Function to navigate to the previous modal
function prevModal(currentModal) {
    closeModal();
    var preModal = currentModal -1;
    if (preModal < 1) {
        preModal = 5 ; // Wrap around to th elast modal
    }
    openModal(prevModal);
}

// Function to navigate to next modal
function nextModal (currentModal) {
    closeModal();
    var nextModal = currentModal + 1;
    if (nextModal > 5) {
        nextModal = 1; // Wrap around to the first modal
    }
    openModal(nextModal);
}
















