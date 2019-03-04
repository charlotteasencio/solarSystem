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

function Orbit(x, y, radius, color){
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
         //c.fillStyle = this.color
         c.stroke()

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
let planet7;
let planet8;

let orbit1;
let orbit2;
let orbit3;
let orbit4;
let orbit5;
let orbit6;
let orbit7;
let orbit8;

function init() {
    const allX = canvas.width / 2
    const allY = canvas.height / 2

    const planet1dist = 70
    const planet2dist = 100
    const planet3dist = 150
    const planet4dist = 195
    const planet5dist = 260
    const planet6dist = 320
    const planet7dist = 360
    const planet8dist = 450

    sun = new Sun(allX, allY, 35, "yellow")

    planet1 = new Planet(allX, allY, 7, "brown", planet1dist)
    planet2 = new Planet(allX, allY, 10, "orange", planet2dist)
    planet3 = new Planet(allX, allY, 15, "blue", planet3dist)
    planet4 = new Planet(allX, allY, 12, "pink", planet4dist)
    planet5 = new Planet(allX, allY, 24, "tan", planet5dist)
    planet6 = new Planet(allX, allY, 30, "green", planet6dist)
    planet7 = new Planet(allX, allY, 18, "lightblue", planet7dist)
    planet8 = new Planet(allX, allY, 22, "purple", planet8dist)

    orbit1 = new Orbit(allX, allY, planet1dist, "black")
    orbit2 = new Orbit(allX, allY, planet2dist, "black")
    orbit3 = new Orbit(allX, allY, planet3dist, "black")
    orbit4 = new Orbit(allX, allY, planet4dist, "black")
    orbit5 = new Orbit(allX, allY, planet5dist, "black")
    orbit6 = new Orbit(allX, allY, planet6dist, "black")
    orbit7 = new Orbit(allX, allY, planet7dist, "black")
    orbit8 = new Orbit(allX, allY, planet8dist, "black")
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    sun.update();

    orbit1.update();
    orbit2.update();
    orbit3.update();
    orbit4.update();
    orbit5.update();
    orbit6.update();
    orbit7.update();
    orbit8.update();

    planet1.update();
    planet2.update();
    planet3.update();
    planet4.update();
    planet5.update();
    planet6.update();
    planet7.update();
    planet8.update();
}

init()
animate()
