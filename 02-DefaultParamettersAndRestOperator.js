const sayHi = (name1, name2, name3, greeting) => {
	console.log(greeting + name1);
	console.log(greeting + name2);
	console.log(greeting + name3);
}

sayHi('James', 'Zarin', 'Maria', 'Hi ');


/*----------------------------------------*/

const sayHi2 =(greeting, ...names) => {
	names.forEach(name => {
		console.log(greeting + name);
	});
}

sayHi2('Hello ', 'James', 'Zarin', 'Maria')