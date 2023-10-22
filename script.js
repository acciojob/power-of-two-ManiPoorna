const isPowerOfTwo = (number) => {
  //your code here
	let num = 2;
	while (num <= number) {
		if (num === number) {
			return true
		}
		if (num > number) {
			break
		}
		num *= 2
	}
	return false
};

// const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
