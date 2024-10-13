var map = L.map('map').setView([-2.147438, -79.955432], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-2.147438, -79.955432]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


// Seleccionar el input y el label
const input = document.getElementById('nombre');
const label = document.querySelector('.floating-label');

// Añadir el evento focus
input.addEventListener('focus', function() {
  label.classList.add('active');
});

// Añadir el evento blur para cuando se salga del input
input.addEventListener('blur', function() {
  if (input.value === '') {
    label.classList.remove('active');
  }
});
