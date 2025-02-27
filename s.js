// Example JavaScript for interactivity
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Explore our amazing games!');
    // You can add more functionality here, like scrolling to the games section
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
});