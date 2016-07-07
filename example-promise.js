// Function using normal javascript
// Notice that both calbacks gets called
function getTempCallback(location, callback) {
	callback(undefined, 78);
	callback('City not found');
}

getTempCallback('Philadelphia', function(err, temp)  {
	if (err) {
		console.log('error', err);
	} else {
		console.log('success', temp)
	}
});


// Same function using promises (ES6 feature)
function getTempPromise(location) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(79);
			reject('Something went wrong');
		}, 1000)
	});
}

getTempPromise('Philadelphia').then(function(temp) {
	console.log('promise success', temp);
}, function(err) {
	console.log('promise error', err);
})


// Challenge area (Create my own promise)
function addpromise(a,b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject("A & B need to be numbers");
		}
	});
}

addpromise(2,3).then(function(sum) {
	console.log('Success. The result of your function is:', sum);
}, function(err) {
	console.log('Error:', err);
});

addpromise("Andrew",9).then(function(sum) {
	console.log('Success. The result of your function is:', sum);
}, function(err) {
	console.log('Error:', err);
});

addpromise("Martin","Andrew").then(function(sum) {
	console.log('Success. The result of your function is:', sum);
}, function(err) {
	console.log('Error:', err);
});