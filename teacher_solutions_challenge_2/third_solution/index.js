const coupons = [
    {
        name: 'promocion-15',
        discount: 15
    },
    {
        name: 'promocion-30',
        discount: 30
    },
    {
        name: 'promocion-50',
        discount: 50
    }
]

function calcPriceWithDiscount(price, coupon) {
    const percentageWithDiscount = 100 - coupon
    const priceWithDiscount = (price * percentageWithDiscount) / 100
    
    return priceWithDiscount
}

function priceDiscountBtn () 
{
    const PriceInput = document.getElementById('PriceInput')
    const priceValue = PriceInput.value
    
    const CouponInput = document.getElementById('CouponInput')
    const couponValue = CouponInput.value
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue
    }

    let userCoupon = coupons.find(isCouponValueValid)
    
    if(!userCoupon) {
        alert(`El cupón ${couponValue} no es válido`)
    } else {
        const discount = userCoupon.discount
        
        const priceWithDiscount = calcPriceWithDiscount(priceValue, discount)
        
        const PriceOutput = document.getElementById('PriceOutput')
        PriceOutput.innerText = `El precio con descuento es:  $${priceWithDiscount}`

    }

}






// const cupones = [
//     {
//         nombre: "cupon15",
//         valor: 15
//     },
//     {
//         nombre: "cupon20",
//         valor: 20
//     },
//     {
//         nombre: "cupon25",
//         valor: 25
//     },
// ];

// var cuponUsuario;
// var cuponValido;

// const esUnCuponValido = function(cupon){
//     return cupon.nombre === cuponUsuario;
// }

// function calcularPrecioConDescuento(precioOriginal, factorPrecio){
//     return precioTotal = Math.round((precioOriginal * factorPrecio) * 100)/100;
// }

// function calcularFactor(){
//     //Verificar Cupon
//     cuponValido = cupones.find(esUnCuponValido)
//     if (!cupones.find(esUnCuponValido)){ return 1
//     }else return (100 - cuponValido.valor)/100;
// }

// function calcPrecioConDescuento(){
//     let precio = document.getElementById("precioOriginal").value;
//     cuponUsuario = document.getElementById("cuponDescuento").value;
//     let factorPrecio = calcularFactor(cuponUsuario);
//     const precioConDescuento = calcularPrecioConDescuento(precio, factorPrecio);
//     if (factorPrecio === 1){
//         document.getElementById("resultCupon").innerText =  `El descuento aplicado será de 0%`
//     }else{
//         document.getElementById("resultCupon").innerText =  `El descuento aplicado será de ${cuponValido.valor}%`
//     }
//     document.getElementById("precioConDescuento").innerText = `El precio con descuento es $${precioConDescuento}`;
// }