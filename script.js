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
function Particle(x, y, radius, color, distanceCenter){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = 0 //Math.random() * Math.PI *2 - to give them a radom starting point along the cirle, using a number between -1 and 1 will give them all the same point
    this.velocity = Math.random() * 0.015
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

function Circle(x, y, radius, color){
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
let particle1;
let particle2;
let particle3;
let particle4;
let particle5;
let particle6;

function init() {
    sun = new Circle(canvas.width / 2, canvas.height / 2, 35, "yellow")
    particle1 = new Particle(canvas.width / 2, canvas.height / 2, 10, "brown", 70)
    particle2 = new Particle(canvas.width / 2, canvas.height / 2, 15, "orange", 100)
    particle3 = new Particle(canvas.width / 2, canvas.height / 2, 15, "blue", 150)
    particle4 = new Particle(canvas.width / 2, canvas.height / 2, 20, "pink", 195)
    particle5 = new Particle(canvas.width / 2, canvas.height / 2, 24, "gray", 260)
    particle6 = new Particle(canvas.width / 2, canvas.height / 2, 30, "green", 360)
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    sun.update();

    particle1.update();
    particle2.update();
    particle3.update();
    particle4.update();
    particle5.update();
    particle6.update();
}

init()
animate()
