// First exercise

const Person = {
	Name: 'Santiago',
	LastName: 'Bastidas',
	userName: 'santiagobr',
	age: 19,
	email: 'santiago@gmail.com',
	adult: true,
	saveMoney: 100000,
	debts: 100
}

const printName = (person) => {
	({ Name, LastName } = person)
	console.log(`Hola! mi nombre es ${Name} ${LastName}`)
}

const realMoney = (person) => {
	({saveMoney, debts} = person)
	let money = saveMoney - debts
	console.log(`Tu dinero real es: ${money}`)
}


// Second exercise
const name = "Juan David";
const lastname = " Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


//Función

var personalPresentation = (name, lastName, nickname) => {
	const completeName = `${name} ${lastName}`
	
	message = `Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}`
    return console.log(message)
}

personalPresentation('Santiago', 'Bastidas', 'santiagobr')	

//Condicionales

// if, else and else if
let tipoDeSuscripcion = 'Basic'
if (tipoDeSuscripcion === 'Basic') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
} else if (tipoDeSuscripcion === 'Expert') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
} else if (tipoDeSuscripcion === 'ExpertPlus') {
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
} else {
	console.log("Solo puedes tomar los cursos gratis");
}

// Condicionales y Ciclos

let userAnswer = prompt('Cuánto es 2 + 2')

function sum (num1, num2) {
	return num1 + num2
}

if (userAnswer == sum(2,2)) {
	console.log('Correcto!')
} else {
	console.log('Incorrecto!')
}


//Listas 

let arrayNuevo = [
	1,
	"Hola",
	true,
	1.5
]

// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

const testArray = [1, 2, 3, 4, 5]

const printArrays = (array) => {
	console.log(array[0], 'Este es el primer elemento del array')
}

printArrays(testArray)

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

const testArray2 = ['Santi', 'Vale', 'Val', 'Nico', 'Sebas', 'Nikis', 'Pipe', 'Wendy']

const printArrayItems = array => {
	array.forEach(element => {
		console.log(element)
	});
}

printArrayItems(testArray2)

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

const testObject = {
	Name: 'Santiago',
	LastName: 'Bastidas',
	Age: 19,
}

const printItemsObjects = object => {
	console.log(`(1) ${object.Name} \n(2) ${object.LastName} \n(3) ${object.Age}`)
}

printItemsObjects(testObject)