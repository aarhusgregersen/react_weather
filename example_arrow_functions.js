// var names = ['Martin', 'Simon', 'Bertel'];

// names.forEach(function(name) {
// 	console.log('forEach', name);
// });

// // Using arrow function

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// // Further expanding on the arrow functionality 
// names.forEach((name) => console.log(name));

// // Even shorter syntax
// var returnMe = (name) => name + '!';
// console.log(returnMe('Martin'));

// // The following wouldn't work as an anonymous function
// var person = {
// 	name: 'Martin',
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name)
// 		});
// 	}
// };

// person.greet();

// // Challenge area: Create 'add' function twice with ES6
var add = (a,b) => a + b;
var add2 = (c,d) => {
	return c + d;
};

console.log(add(9,4));
console.log(add(26,4));
console.log(add2(9,4));
console.log(add2(26,4));
