let ball = document.querySelector("#ball")
let offset = 10;

// Way 1

// setInterval(()=>{
//     ball.style.left = offset + "px"
//     offset += 1
// }, 10)


// Way 2 (best way)

function animate(){
    ball.style.left = offset + "px"
    offset += 1
    requestAnimationFrame(animate)
}

animate()