// literal
const escola = 'Caelum';

// construtor
const school = new String('Caelum');

console.log('school', school, school.constructor);
console.log('escola', escola, escola.constructor);


// padrao litera com numeros
let idade = 22;
// constructor
let age = new Number(22);


console.log('idade', idade, idade.constructor);
console.log('age', age, age.constructor);


console.dir(String.prototype);
console.dir(Number.prototype);
