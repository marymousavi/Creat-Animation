let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

let  r = 40
let  x = randomIntFormInterval(0+r,window.innerWidth)
let  y = randomIntFormInterval(0+r,window.innerHeight)
let vx = (Math.random() - 0.5) * 4     // vx (left to right) or vy (up to down) سرعت رو میشه رندوم داد و هم یک عدد ثابت 
let vy = (Math.random() - 0.5) * 4     //(Math.random() - 0.5) اگر خواستیم سرعت حرکت بیشتر بشه در یک عدد ثابت ضرب میکنیم

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight)
    c.beginPath()
    c.arc(x,y,r,0,2 * Math.PI)
    c.fillStyle = "red"
    c.fill()
    if(x+r > window.innerWidth || x-r < 0){
        vx = -vx
    }                  // توپ میره میخوره به ته خط برمیگرده
    if(y+r > window.innerHeight || y-r < 0){
        vy = -vy
    }
    x += vx         // (x += vx or y += vy) spead of move ball
    y += vy

    requestAnimationFrame(animate)
}

animate()

function randomIntFormInterval(min,max){
    return Math.floor(Math.random() * (max - min +1) +min)
}
