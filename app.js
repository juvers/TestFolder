const Duplicate = (n) => {
	return Math.pow(n, n)
};

const Closure = (x,y) => {
	return function (z){
		return z + x * y
	}
}

const Main = Closure(3,9);
console.log(Main(12))

console.log(Closure(6,7)(5))
console.log(Duplicate(5))
