const toggleMenu = document.getElementById('toggle-menu');
const navList = document.querySelector('nav ul');

toggleMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
});
