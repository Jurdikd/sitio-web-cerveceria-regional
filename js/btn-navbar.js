const navbar = document.getElementById("navbar-menu");
const stickyButton = document.getElementById("stickyButton");
const floatingButton = document.getElementById("floatingButton");

// Función de flecha para manejar el clic en el botón
const toggleStickyMenu = () => {
	navbar.classList.toggle("sticky-top");
	stickyButton.classList.toggle("sticky-menu");
};

// Función para mostrar u ocultar el botón flotante según el scroll
const handleScroll = () => {
	if (window.scrollY > 100) {
		floatingButton.style.display = "block";
	} else {
		floatingButton.style.display = "none";
	}
};

// Añadir un evento de clic al botón
document.getElementById("stickyButton").addEventListener("click", toggleStickyMenu);

// Añadir un evento de scroll para manejar la visibilidad del botón flotante
window.addEventListener("scroll", handleScroll);
