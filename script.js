const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Planet(x, y, radius, color, distanceCenter){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = 0 //Math.random() * Math.PI *2 - to give them a radom starting point along the cirle, using a number between -1 and 1 will give them all the same point
    this.velocity = Math.random() * 0.03
    this.distanceCenter = distanceCenter


    this.update = () => {

        this.radians += this.velocity;
        //using cos and sin gives circular motion
        this.x = x + Math.cos(this.radians) * distanceCenter
        this.y = y + Math.sin(this.radians) * distanceCenter
        this.draw()
    }

    this.draw = () => {
         c.beginPath()
         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
         c.fillStyle = this.color
         c.fill()
         c.closePath()
        // c.beginPath();
        // c.strokeStyle = "black";
        // c.lineWidth = 1
        // c.moveTo(lastPoint.x, lastPoint.y);
        // c.lineTo(this.x, this.y);
        // c.stroke();
        // c.closePath();
    }
}

function Sun(x, y, radius, color){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color

    this.update = function() {

        this.draw()
    }

    this.draw = function() {
         c.beginPath()
         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
         c.fillStyle = this.color
         c.fill()
         c.closePath()

    }
}

// Implementation
let sun;
let planet1;
let planet2;
let planet3;
let planet4;
let planet5;
let planet6;

function init() {
    sun = new Sun(canvas.width / 2, canvas.height / 2, 35, "yellow")
    planet1 = new Planet(canvas.width / 2, canvas.height / 2, 10, "brown", 70)
    planet2 = new Planet(canvas.width / 2, canvas.height / 2, 15, "orange", 100)
    planet3 = new Planet(canvas.width / 2, canvas.height / 2, 15, "blue", 150)
    planet4 = new Planet(canvas.width / 2, canvas.height / 2, 20, "pink", 195)
    planet5 = new Planet(canvas.width / 2, canvas.height / 2, 24, "gray", 260)
    planet6 = new Planet(canvas.width / 2, canvas.height / 2, 30, "green", 360)
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    sun.update();

    planet1.update();
    planet2.update();
    planet3.update();
    planet4.update();
    planet5.update();
    planet6.update();
}

init()
animate()
