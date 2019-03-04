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
function Planet(x, y, radius, color,  velocity, distanceCenter){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = Math.random() * Math.PI *2 //to give them a radom starting point along the cirle, using a number between -1 and 1 will give them all the same point
    this.velocity = velocity
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

// const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
// backgroundGradient.addColorStop(0, '#143872')
// backgroundGradient.addColorStop(1, '#54546d')

// let grd;

// grd = c.createRadialGradient(canvas.width / 2, canvas.height / 2, 0.000, canvas.width / 2, canvas.height / 2, canvas.height / 2)

// grd.addColorStop(0.000, 'rgba(255, 238, 40, 1.000)');
//       grd.addColorStop(0.200, 'rgba(255, 238, 40, 1.000)');
//       grd.addColorStop(0.210, 'rgba(194, 66, 57, 1.000)');
//       grd.addColorStop(0.400, 'rgba(194, 66, 57, 1.000)');
//       grd.addColorStop(0.410, 'rgba(130, 194, 238, 1.000)');
//       grd.addColorStop(0.600, 'rgba(130, 194, 238, 1.000)');
//       grd.addColorStop(0.610, 'rgba(254, 254, 254, 1.000)');
//       grd.addColorStop(0.780, 'rgba(254, 254, 254, 1.000)');
//       grd.addColorStop(0.790, 'rgba(52, 50, 51, 1.000)');
//       grd.addColorStop(0.990, 'rgba(52, 50, 51, 1.000)');
//       grd.addColorStop(1.000, 'rgba(255, 255, 255, 1.000)');



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

    const planet1dist = canvas.height / 15
    const planet2dist = canvas.height / 11
    const planet3dist = canvas.height / 7.6
    const planet4dist = canvas.height / 5.8
    const planet5dist = canvas.height / 4.4
    const planet6dist = canvas.height / 3.2
    const planet7dist = canvas.height / 2.5
    const planet8dist = canvas.height / 2.2

    sun = new Sun(allX, allY, 35, "yellow")

    planet1 = new Planet(allX, allY, 7, "brown", 0.01607, planet1dist)
    planet2 = new Planet(allX, allY, 10, "orange", 0.01174, planet2dist)
    planet3 = new Planet(allX, allY, 15, "blue", 0.01, planet3dist)
    planet4 = new Planet(allX, allY, 12, "red", 0.00802, planet4dist)
    planet5 = new Planet(allX, allY, 24, "tan", 0.00434, planet5dist)
    planet6 = new Planet(allX, allY, 30, "green", 0.00323, planet6dist)
    planet7 = new Planet(allX, allY, 20, "lightblue", 0.00228, planet7dist)
    planet8 = new Planet(allX, allY, 22, "purple", 0.00182, planet8dist)

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

    // c.fillStyle = backgroundGradient
    // c.fillRect(0, 0, canvas.width, canvas.height)


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

    // c.fillStyle = grd;
    // c.fillRect(0, 0, canvas.width, canvas.height)
}

init()
animate()
