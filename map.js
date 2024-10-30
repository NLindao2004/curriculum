var map = L.map('map').setView([-2.147438, -79.955432], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-2.147438, -79.955432]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


const input = document.getElementById('nombre');
const label = document.querySelector('.floating-label');

input.addEventListener('focus', function() {
  label.classList.add('active');
});


input.addEventListener('blur', function() {
  if (input.value === '') {
    label.classList.remove('active');
  }
});


function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active'); 
}



function animateProgress(percentage) {
  const progress = document.getElementById("progress");
  progress.style.width = percentage + "%"; 
}

animateProgress(75); 