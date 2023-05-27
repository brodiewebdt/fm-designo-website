const links = document.querySelector('.links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  if (links.classList.contains('show-links')) {
    document.querySelector('.overlay').style.display = 'none';
    links.classList.remove('show-links');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  } else {
    document.querySelector('.overlay').style.display = 'block';
    links.classList.add('show-links');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    links.classList.remove('show-links');
    document.querySelector('.overlay').style.display = 'none';
  }
});
