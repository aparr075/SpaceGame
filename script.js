const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const moonImg = new Image()
moonImg.src = `./images/full-moon-1.jpeg`


let moon = { 
    x: 0, 
    y: 0, 
    w: canvas.width, 
    h: canvas.height 
}

moonImg.onload = function () {
    ctx.drawImage(moonImg, moon.x, moon.y, moon.w, moon.h)
    }
    

const mooniniteImg = new Image()
mooniniteImg.src = `./images/ATHF-4-Lyfe-aqua-teen-hunger-force-14425869-235-199.gif`

class Mooninite {
    constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w * .5;
    this.h = h * .5;
    this.bullets = []
    }
    shootGun = () => {
    let bullet = {
    x: this.x + (this.w / 2), 
    y: this.y, 
    w: 100, 
    h: 100
    }
    this.bullets.push(bullet)
    }
}

let mooninite = new Mooninite(canvas.width - 800, (canvas.height/2)- 60, 235, 199)


window.onkeydown = function (event) {
   switch (event.key) {
     case 'ArrowLeft':
       mooninite.x -= 10
       break;
     case 'ArrowRight':
       mooninite.x += 10
       break;
     case 'ArrowUp':
       mooninite.y -= 10
       break;
     case 'ArrowDown':
       mooninite.y += 10
       break;
     case ' ':
       mooninite.shootGun()
       break;
   }
 }



  
mooniniteImg.onload = function () {
ctx.drawImage(mooniniteImg, mooninite.x, mooninite.y, mooninite.w, mooninite.h)
}

function drawBullets() {
    for (let bullet of mooninite.bullets) {
      bullet.x += 10
      ctx.fillStyle = `orange`
      ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h)
    }
  }
 
let mshakeImg = new Image()
mshakeImg.src = `./images/Aqua-Teen-Hunger-Force-Master-Shake-smiling-741x1024.png`

let shake = [];

class Obstacles {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    drawObstacles() {
        this.x--
        ctx.drawImage(mshakeImg, this.x, this.y, this.w, this.h)
    }

}
setInterval(function () {
    let newObs = new Obstacles(Math.random() * canvas.width - 50,0,100,100)
    shake.push(newObs)
}, 3000)

 function drawShake(){
     for(let shak of shake){
         shak.drawObstacles()
     }
    }


let animationId = null


 function animate() {
   animationId = requestAnimationFrame(animate)
   ctx.clearRect(0, 0, canvas.width, canvas.height)

   ctx.drawImage(moonImg, moon.x, moon.y, moon.w, moon.h)

   ctx.drawImage(mooniniteImg, mooninite.x, mooninite.y, mooninite.w, mooninite.h)

   // ctx.drawImage(shakeImg, shake.x,shake.y,shake.w,shake.h)


   drawShake()  
   //detectCollision()
   drawBullets()
 }
 animate()
