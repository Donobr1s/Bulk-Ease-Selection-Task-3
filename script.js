// Function to filter products with smooth transition
function filterProducts(category) {
    const productContainer = document.getElementById('product-container');
    const allProducts = document.querySelectorAll('.product-card');
  
    // Start fade-out effect
    productContainer.classList.add("hidden");
  
    setTimeout(() => {
      allProducts.forEach(product => {
        if (category === 'ALL' || product.dataset.category.toLowerCase() === category.toLowerCase()) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
  
      // Remove fade-out effect after the timeout
      productContainer.classList.remove("hidden");
    }, 300); // Wait 0.3 seconds for fade-out before applying logic
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-buttons button");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const selectedCategory = button.innerText.trim();
        filterProducts(selectedCategory);
      });
    });
  });
  