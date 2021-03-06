'use strict'

const assert = require('./assert').assert

const monday = [
  { name: 'Write a summary HTML/CSS', duration: 180,},
  { name: 'Some web development', duration: 120,},
  { name: 'Fix homework for class10', duration: 20,},
  { name: 'Talk to a lot of people', duration: 200,},
]

const tuesday = [
  { name: 'Keep writing summary', duration: 240,},
  { name: 'Some more web development', duration: 180,},
  { name: 'Staring out the window', duration: 10,},
  { name: 'Talk to a lot of people', duration: 200,},
  { name: 'Look at application assignments new students', duration: 40,},
]

function computeEarnings(tasks, rate) {
	tasks = tasks.filter(task => task.duration >= 120)
	let total = tasks.reduce(((a,b) => b.duration+a),0)
  return (total/60.0 * rate).toFixed(2)
}

const tasks = monday.concat(tuesday)
const rate = 20
assert(computeEarnings(tasks, rate), '373.33')
