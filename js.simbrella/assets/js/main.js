const header = document.querySelector('header')

window.addEventListener("scroll", (e) => {
    header.classList.toggle("demo", window.scrollY >0)
})

const navtab = document.querySelector('.nav-tab')
const hamburger = document.querySelector('.hamburger')
const  divs = document.querySelectorAll('.hamburger div')

hamburger.addEventListener('click', () => {
    navtab.classList.toggle('hereket')
    if(navtab.classList.contains('hereket'))
    divs.forEach(div => div.style.backgroundColor = "black")
    else divs.forEach(div => div.style.backgroundColor = "black")
}) 
