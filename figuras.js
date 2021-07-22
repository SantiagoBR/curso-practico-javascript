//Código del cuadrado
console.group('Frames')

function framePerimeter (side) {
    return side * 4
}

function frameArea (side) {
    return side * side
}
console.groupEnd()

//Código del triángulo
console.group('Triángulos')

function trianglePerimeter (side1, side2, base) {
    return side1 + side2 + base
}

function triangleArea (base, height) {
    return (base * height) / 2
}

console.groupEnd()

console.group('Círculos')

//Radio
const circleRadio = 4

//Diámetro
function circleDiameter (radio) {
    return radio * 2
}

//PI
const PI = Math.PI

//Cicunferencia
function circlePerimeter (radio) {
    const diameter = circleDiameter(radio)
    return  diameter * PI 
}

//Área
function circleArea (radio) {
    return (radio * radio) * PI
}

console.groupEnd()

//Interacción con HTML
function calcFramePerimeter() {
    const input = document.getElementById('FrameInput')
    const value = input.value

    const perimeter = framePerimeter(value)
    alert(perimeter)
}

function calcFrameArea() {
    const input = document.getElementById('FrameInput')
    const value = input.value

    const area = frameArea(value)
    alert(area)
}
