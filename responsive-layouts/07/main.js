const $menu = document.getElementById('menu')
$menu.addEventListener('click', () => {
  const $headerNav = document.getElementById('header-nav')
  $headerNav.classList.toggle('header__nav--visible')
})