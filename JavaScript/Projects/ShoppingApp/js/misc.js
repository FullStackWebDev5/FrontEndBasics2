let notificationAlert = document.getElementById('notification-alert')

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
			});
	});
});

const hideAlert = () => {
	notificationAlert.style.display = 'none';
}