
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
  });
}
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => menu?.classList.remove('open'));
});
