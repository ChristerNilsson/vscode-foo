const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log
print('##### begin #####')

crank = (numbers) => {
	for (i of range(numbers.length-1)) numbers[i] += numbers[i+1]
}

engine = (cranks, numbers) => {
	printer = [] 
	for (j of range(cranks)) {
		printer.push(numbers[0])
		crank(numbers)
	}
	return printer
}

assert(engine(0,[9,0,0,0,0,0,0,0]), [])
assert(engine(1,[9,0,0,0,0,0,0,0]), [9])
assert(engine(2,[9,0,0,0,0,0,0,0]), [9,9])

assert(engine(4,[10,1,0,0,0,0,0,0]), [10,11,12,13])
assert(engine(5,[7,2,0,0,0,0,0,0]), [7,9,11,13,15])
assert(engine(6,[7,5,0,0,0,0,0,0]), [7,12,17,22,27,32])

assert(engine(5,[1,3,2,0,0,0,0,0]), [1,4,9,16,25])
assert(engine(5,[2,6,4,0,0,0,0,0]), [2,8,18,32,50])

assert(engine(5,[1,7,12,6,0,0,0,0]), [1,8,27,64,125])

//for (i of range(4,0,-1)) print(i)
//############
makeDifferences = (lst) => {
	n = lst.length
	for (i of range(n-1)) 
		for (j of range(n-1,i,-1)) 
			lst[j] -= lst[j-1]
	return lst
}

assert(makeDifferences([0,1,4,9,16,25,36,49]), [0,1,2,0,0,0,0,0])


// calculate sinus
sinus = []
for (i of range(8)) 
	sinus.push(Math.sin(1.0*i*Math.PI/180))
//print(sinus)
diff = sinus.slice()
makeDifferences(diff)
//print(diff)
print(engine(91,diff))

for (i in range(11))
	print(Math.sin(9*i*Math.PI/180))




print('#####  end  #####')
