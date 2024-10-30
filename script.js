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



function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach(bar => {
    const targetPercentage = parseInt(bar.getAttribute('data-porcentaje'), 10);
    let currentPercentage = 0;

    // Intervalo que incrementa la barra hasta alcanzar el porcentaje objetivo
    const interval = setInterval(() => {
      if (currentPercentage >= targetPercentage) {
        clearInterval(interval); // Detiene la animación cuando se alcanza el porcentaje objetivo
      } else {
        currentPercentage++; // Incrementa el porcentaje actual
        bar.style.width = `${currentPercentage}%`; // Actualiza el ancho de la barra
        bar.textContent = `${currentPercentage}%`; // Actualiza el texto dentro de la barra
      }
    }, 50); // Incremento cada 50 ms para simular carga
  });
}

// Llama a la función para iniciar la animación
animateProgressBars();



document.getElementById("menu-habilidades").addEventListener("click", function(event) {
  animateProgressBars(); // Llama a la función de animación
});
