'use strict'

const assert = chai.assert.deepEqual
const range = _.range
const print = console.log

const GRAVITY = 0.1

let balls = []
let score = null

class Score {
	constructor () {
		this.start = new Date()
		this.stopp = new Date()
		this.clicks = 0
	}
	click = () => {
		this.clicks++
		this.stopp = new Date()
	}	
	value = () => round((this.stopp-this.start)/1000) + this.clicks*20
}

class Ball  {
	constructor (x,y,radius,vx,vy,r,g,b) {
		_.extend(this,{x,y,radius,vx,vy,r,g,b})
	}

	inside = (mx,my) => dist(mx,my,this.x,this.y) < this.radius

	update () {
		this.x += this.vx
		this.y += this.vy
		if (this.x + this.radius > width || this.x < this.radius) this.vx = -this.vx	
		if (this.y + this.radius > height) this.vy = -this.vy; else this.vy += GRAVITY	
	}

	draw () {
		fill(this.r, this.g, this.b)
		ellipse(this.x, this.y,2*this.radius,2*this.radius)
		this.update()
	}
}

function setup () {
	createCanvas(windowWidth,windowHeight)
	ellipseMode(CENTER)
	textAlign(CENTER,CENTER)
	for (const i of range(10)) {
		const x = width*random()
		const y = 100*random()
		const radius = 50 + 50*random()
		const vx = 1+2*random()
		const vy = 1+3*random()
		const r = 256*random()
		const g = 256*random()
		const b = 256*random()
		const ball = new Ball(x,y,radius,vx,vy,r,g,b)
		balls.push(ball)
	}
	balls.sort((a,b) => b.radius - a.radius)
	score = new Score()
}

function showScore() {
	noFill()
	stroke(0)
	textSize(800)
	text(score.value(),width/2,height/2)
}

function draw () {
	background(128)
	showScore()
	balls.forEach(ball => ball.draw())
}

function mousePressed () {
	balls = balls.filter(ball => ! ball.inside(mouseX,mouseY))
	score.click()	
} 
	