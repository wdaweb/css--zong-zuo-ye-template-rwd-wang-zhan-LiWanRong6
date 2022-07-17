const hamburgerBtn = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.col.menu')
let count = 0
hamburgerBtn.onclick = function () {
  count++
  console.log(window.innerWidth)
  if (window.innerWidth < 1200) {
    if (count % 2 == 0) {
      menu.style.display = 'none'
      menu.style.right = '-300px'
    }
    else {
      menu.style.display = 'block'
      menu.style.right = '0'
    }
  }


}
