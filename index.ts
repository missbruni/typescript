'use strict'

const greeter = person => {
	"Hello, " + person;
}

var user = 'Bruna';

document.body.innerHTML = greeter(user);