const $menuBtn = document.getElementById('menu')
$menuBtn.addEventListener('click', () => {
  const $nav = document.getElementById('nav')
  $nav.classList.toggle('nav--open')
})
