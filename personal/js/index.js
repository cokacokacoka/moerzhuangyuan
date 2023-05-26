let element = document.querySelector('.wrapper')
let speedX = 0
let speedY = 0
let x0 = 0
let y0 = 0
let clientX = 0
let clientY = 0
let distance = 30
let timer = setInterval(() => {
    move()
}, 50)
window.addEventListener('mousemove', function (event) {
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    x0 = window.innerWidth / 2
    y0 = window.innerHeight / 2
    // if (event.clientX > x0) {
    //     speed = event.clientX - x0
    // }kl
    clientX = event.clientX
    clientY = event.clientY
    if ((event.clientX < x0 + 400 && event.clientX > x0 - 400) && (event.clientY < y0 + 400 && event.clientY < y0 - 400)) {
        this.clearInterval(timer)
        timer = null
    } else {
        if (!timer) {
            timer = setInterval(() => {
                move()
            }, 50)
        }
    }
})
function move() {
    if (clientX > x0) {
        speedX -= (clientX - x0) / distance
    }
    if (clientY > y0) {
        speedY -= (clientY - y0) / distance
    }
    if (clientX < x0) {
        speedX += (x0 - clientX) / distance
    }
    if (clientY < y0) {
        speedY += (y0 - clientY) / distance
    }
    element.style.left = speedX + 'px'
    element.style.top = speedY + 'px'
}
