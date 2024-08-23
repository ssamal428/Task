

// Select all the offer cards and their associated radio buttons
const offerCards = document.querySelectorAll('.offer-card');
const offerRadios = document.querySelectorAll('.offer-radio');

// Function to handle card expansion and visibility of selectors
function handleCardExpansion(card) {
  // Remove 'expanded' class from all other cards
  offerCards.forEach(c => c.classList.remove('expanded'));
  
  // Add 'expanded' class to the clicked card
  card.classList.add('expanded');

  // Hide all selectors initially
  document.querySelectorAll('.selector').forEach(selector => {
    selector.style.display = 'none';
  });

  // Show the size and color selectors for the clicked card
  const selector = card.querySelector('.selector');
  if (selector) {
    selector.style.display = 'block';
  }
}

// Add click event listener to each offer card
offerCards.forEach((card, index) => {
  card.addEventListener('click', function() {
    handleCardExpansion(this);
    // Automatically check the associated radio button
    offerRadios[index].checked = true;
  });
});

// Add event listener for the "Add to Cart" button
document.querySelector('.add-to-cart').addEventListener('click', function() {
  alert('Item added to cart!');
});