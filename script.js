// Hämta alla bilder i image-grid
const images = document.querySelectorAll('.image-grid img');

// Gå igenom varje bild och lägg till en händelselyssnare
images.forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)'; // Förstorar bilden
    img.style.transition = 'transform 0.3s ease'; // Smidig övergång
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)'; // Återställer storleken när musen lämnar
  });
});