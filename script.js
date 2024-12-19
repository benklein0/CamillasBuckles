// Auth state observer
auth.onAuthStateChanged((user) => {
  if (user) {
    // Check if user is admin
    db.collection('users').doc(user.uid).get().then((doc) => {
      if (doc.data().role === 'admin') {
        document.getElementById('adminPanel').style.display = 'block';
      }
    });
    
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('signupBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'block';
  } else {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('signupBtn').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
  }
});

// Load products
function loadProducts() {
  const productsContainer = document.getElementById('products-container');
  db.collection('products').onSnapshot((snapshot) => {
    productsContainer.innerHTML = '';
    snapshot.forEach((doc) => {
      const product = doc.data();
      productsContainer.innerHTML += `
        <div class="product">
          <h2>${product.name}</h2>
          <p>Price: $${product.price}</p>
          <img src="${product.imageUrl}" alt="${product.name}">
          <!-- Your existing PayPal button code -->
        </div>
      `;
    });
  });
}
