let promiseToCleanTheRoom = new Promise(function(resolve, reject){
	let isClean = false;
	
	if(isClean){
		resolve('Clean');
	} else {
		reject('not Clean');
	}
})

promiseToCleanTheRoom.then(function(fromResolve){
	console.log('the room is ' + fromResolve
	)
}).catch(function(fromReject){
	console.log('The room is ' + fromReject)
})

/* ex2  */
 

let cleanRoom = function(){
	return new Promise(function(resolve, reject){
		resolve('Cleaned The Room')
	})
}

let removeGarbage = function(message){
	return new Promise(function(resolve, reject){
		resolve(message + ' remove Garbage')
	})
}

let winIceCream = function(message){
	return new Promise(function(resolve, reject){
		resolve(message + ' won Ice cream')
	})
}

cleanRoom().then(function(result){
	return removeGarbage(result)
}).then(function(result){
	return winIceCream(result)
}).then(function(result){
	console.log('finished ' + result)
}).catch(function(fromReject){
	console.log("The room ain't " + fromReject)
})

/*  Ex.3 */

 


let cleanRoom = function(){
	return new Promise(function(resolve, reject){
		resolve('Cleaned The Room')
	})
}

let removeGarbage = function(message){
	return new Promise(function(resolve, reject){
		resolve(message + ' remove Garbage')
	})
}

let winIceCream = function(message){
	return new Promise(function(resolve, reject){
		resolve(message + ' won Ice cream')
	})
}

 

//Promise.race console.log('one of them is finished');
Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
	console.log('All finished');
})

/*  Reference explanation */

Promise.all([p1,p2,p3]) // wait for all - abort on any failure
Promise.race([p1,p2,p3]) // wait for all - abort on firs success or failure
Promise.allSettled([p1,p2,p3]) // wait for all
Promise.any([p1,p2,p3]) // wait for all - abort on first success - 2021 new feauture