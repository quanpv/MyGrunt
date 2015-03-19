test('HelloWorld', function() {
	var expected = 'HelloWorld';
	equal(HelloWorld('Tuan'), 'Hello World, My name is Tuan');
	equal(HelloWorld(), 'Hello World');
});