function HelloWorld() {
	switch(arguments.length) {
		case 0: {
			return 'Hello World';
		}
		case 1: {
			return 'Hello World, My name is ' + arguments[0];
		}
	}
}