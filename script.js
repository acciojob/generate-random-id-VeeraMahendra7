function makeid(l) {
  // write your code here
	let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let str = "";
	for(let i=0;i<l;i++){
		str += char.charAt(Math.floor(Math.random()*char.length));
	}
	return str;

}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
