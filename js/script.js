document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const cartModal = document.getElementById('cart-modal');
  const orderCompletionModal = document.getElementById('order-completion-modal');
  const signupModal = document.getElementById('signup-modal');
  const loginModal = document.getElementById('login-modal');
  
  const cartBtn = document.getElementById('cart-btn');
  const completeOrderBtn = document.getElementById('complete-order-btn');
  const signupBtn = document.querySelectorAll('a[href="#"]')[3]; // 'Üye Ol' link
  const loginBtn = document.querySelectorAll('a[href="#"]')[2]; // 'Giriş Yap' link
  const closeButtons = document.querySelectorAll('.modal .close');
  
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const completeOrderForm = document.getElementById('complete-order-form');
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  
  const addCartButtons = document.querySelectorAll('.btn-add-cart');
  let cart = [];

  // Open and close modals
  const openModal = (modal) => {
    modal.style.display = 'block';
  };
  
  const closeModal = (modal) => {
    modal.style.display = 'none';
  };
  
  cartBtn.addEventListener('click', () => openModal(cartModal));
  completeOrderBtn.addEventListener('click', () => {
    closeModal(cartModal);
    openModal(orderCompletionModal);
  });
  
  signupBtn.addEventListener('click', () => openModal(signupModal));
  loginBtn.addEventListener('click', () => openModal(loginModal));
  
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      closeModal(button.parentElement.parentElement);
    });
  });
  
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target);
    }
  });

  // Add to Cart functionality
  const updateCart = () => {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price} TL`;
      cartItems.appendChild(li);
      total += item.price;
    });
    cartTotal.textContent = `Toplam: ${total} TL`;
  };

  addCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productItem = event.target.closest('.product-item');
      const name = productItem.querySelector('h2').textContent;
      const price = parseFloat(productItem.querySelector('h3').textContent.replace(' TL', ''));
      cart.push({ name, price });
      updateCart();
    });
  });

  // Form submissions
  completeOrderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Form handling logic here
    alert('Siparişiniz tamamlandı!');
    cart = [];
    updateCart();
    closeModal(orderCompletionModal);
  });

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Signup form handling logic here
    alert('Üyelik tamamlandı!');
    closeModal(signupModal);
  });

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Login form handling logic here
    alert('Giriş başarılı!');
    closeModal(loginModal);
  });

  // Handle search and menu buttons
  const searchBtn = document.getElementById('search-btn');
  const menuBtn = document.getElementById('menu-btn');

  searchBtn.addEventListener('click', () => {
    alert('Arama özelliği şu anda kullanılabilir değil.');
  });

  menuBtn.addEventListener('click', () => {
    alert('Menü özelliği şu anda kullanılabilir değil.');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');

  document.querySelector('#feedback-btn').addEventListener('click', () => {
    document.querySelector('#feedback-modal').style.display = 'block';
  });

  document.querySelector('#more-info-btn').addEventListener('click', () => {
    document.querySelector('#order-completion-modal').style.display = 'block';
  });

  document.querySelector('#cart-btn').addEventListener('click', () => {
    document.querySelector('#cart-modal').style.display = 'block';
  });

  document.querySelector('#complete-order-btn').addEventListener('click', () => {
    document.querySelector('#order-completion-modal').style.display = 'block';
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
    }
  });
});
$(document).ready(function() {
  $('.modal-form').on('submit', function(event) {
    event.preventDefault(); // Formun gönderilmesini engelle
    $(this).after('<p class="success-message">Formunuz başarıyla gönderildi!</p>');
    $('.success-message').fadeIn().delay(3000).fadeOut(); // Başarı mesajını göster ve kaybolmasını sağla
    this.reset(); // Formu sıfırla
  });

  // Modal açma ve kapama işlemleri
  const modals = $('.modal');
  const closeButtons = $('.close');

  $('#feedback-btn').on('click', function() {
    $('#feedback-modal').fadeIn();
  });

  $('#more-info-btn').on('click', function() {
    $('#order-completion-modal').fadeIn();
  });

  $('#cart-btn').on('click', function() {
    $('#cart-modal').fadeIn();
  });

  $('#complete-order-btn').on('click', function() {
    $('#order-completion-modal').fadeIn();
  });

  closeButtons.on('click', function() {
    modals.fadeOut();
  });

  $(window).on('click', function(e) {
    if ($(e.target).hasClass('modal')) {
      modals.fadeOut();
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Get the modals
  var complaintModal = document.getElementById('complaint-modal');
  var requestProductModal = document.getElementById('request-product-modal');
  var returnRequestModal = document.getElementById('return-request-modal');
  var contactSelectionModal = document.getElementById('contact-selection-modal');

  // Get the buttons that open the modals
  var contactLink = document.getElementById('contact-link');
  var openComplaintModalBtn = document.getElementById('open-complaint-modal');
  var openRequestProductModalBtn = document.getElementById('open-request-product-modal');
  var openReturnRequestModalBtn = document.getElementById('open-return-request-modal');

  // Get the <span> elements that close the modals
  var spanCloseButtons = document.getElementsByClassName('close');

  // Function to open the modal
  function openModal(modal) {
    modal.style.display = 'block';
  }

  // Add event listener to contact link to open contact selection modal
  contactLink.onclick = function() {
    openModal(contactSelectionModal);
  };

  // Add event listeners to buttons in contact selection modal to open specific modals
  openComplaintModalBtn.onclick = function() {
    contactSelectionModal.style.display = 'none';
    openModal(complaintModal);
  };
  openRequestProductModalBtn.onclick = function() {
    contactSelectionModal.style.display = 'none';
    openModal(requestProductModal);
  };
  openReturnRequestModalBtn.onclick = function() {
    contactSelectionModal.style.display = 'none';
    openModal(returnRequestModal);
  };

  // When the user clicks on <span> (x), close the modal
  for (var i = 0; i < spanCloseButtons.length; i++) {
    spanCloseButtons[i].onclick = function() {
      this.parentElement.parentElement.style.display = 'none';
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == complaintModal) {
      complaintModal.style.display = 'none';
    }
    if (event.target == requestProductModal) {
      requestProductModal.style.display = 'none';
    }
    if (event.target == returnRequestModal) {
      returnRequestModal.style.display = 'none';
    }
    if (event.target == contactSelectionModal) {
      contactSelectionModal.style.display = 'none';
    }
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cart = [];

  function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        ${item.name} - ${item.price} TL
        <button class="remove-item" data-index="${index}">Sil</button>
      `;
      cartItems.appendChild(listItem);
      total += item.price;
    });

    cartTotal.textContent = `Toplam: ${total} TL`;
  }

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-add-cart')) {
      const product = event.target.closest('.product-item');
      const name = product.querySelector('h2').textContent;
      const price = parseFloat(product.querySelector('h3').textContent.replace(' TL', ''));

      cart.push({ name, price });
      updateCart();
    }

    if (event.target.classList.contains('remove-item')) {
      const index = event.target.dataset.index;
      cart.splice(index, 1);
      updateCart();
    }
  });
});
document.getElementById('search-btn').addEventListener('click', function() {
  // Burada arama işlemini gerçekleştirebilirsiniz.
  console.log('Arama butonuna tıklandı');
});

document.getElementById('cart-btn').addEventListener('click', function() {
  // Burada sepet işlemlerini gerçekleştirebilirsiniz.
  console.log('Sepet butonuna tıklandı');
});

document.getElementById('menu-btn').addEventListener('click', function() {
  // Burada menü işlemlerini gerçekleştirebilirsiniz.
  console.log('Menü butonuna tıklandı');
});
document.getElementById('search-btn').addEventListener('click', function() {
  var searchText = document.getElementById('search-box').value.toLowerCase();
  var products = document.querySelectorAll('.product');
  
  products.forEach(function(product) {
    var productName = product.querySelector('.product-name').innerText.toLowerCase();
    if (productName.includes(searchText)) {
      product.style.border = '2px solid red'; // Ürünü vurgula
      product.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Ürünü sayfanın en üstüne getir
    } else {
      product.style.border = 'none';
    }
  });
});

