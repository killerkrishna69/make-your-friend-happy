let backgroundImageIndex = 0;
let backgroundImages = [
  'couple1.jpg',
  'couple2.jpg',
  'couple3.jpg'
];

function changeBackgroundImage() {
  document.body.style.backgroundImage = `url(${backgroundImages[backgroundImageIndex]})`;
  backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
  setTimeout(changeBackgroundImage, 1000); // change every 3 seconds
}

changeBackgroundImage();

// Add animation to containers
let containers = document.querySelectorAll('.contaner');
containers.forEach((container, index) => {
  container.style.animation = `animateIn ${index * 0.5}s forwards`;
  container.style.animationDelay = `${index * 0.5}s`;
});

// Get the elements
const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');

// Set a timeout to show each element after 5 seconds
setTimeout(() => {
  v1.style.display = 'flex';
 
}, 100);

setTimeout(() => {
  
  v2.style.display = 'flex';
 
}, 4000);

setTimeout(() => {
  
  v3.style.display = 'flex';
  
}, 7000);

setTimeout(() => {
 
  v4.style.display = 'flex';
}, 10000);





