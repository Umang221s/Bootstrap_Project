ul = document.querySelector('.main-ul')
fa = document.querySelector('.fa-solid')
list = document.querySelectorAll('.li-menu')

function click_me() {
    if (fa.classList.toggle('fa-xmark')) {
        ul.style.left = "0px"
    }
    if (fa.classList.toggle('fa-bars')) {
        ul.style.left = "-1000px"
    }
}

list.forEach(u => {
    u.addEventListener("click", () => {
        ul.style.left = "-1000px"
        if (fa.classList.toggle('fa-bars')) {
            fa.classList.remove('fa-xmark')
        }
    })

});
