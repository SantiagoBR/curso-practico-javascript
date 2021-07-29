function calcPriceWithDiscount(price, coupon) {
    const percentageWithDiscount = 100 - coupon
    const priceWithDiscount = (price * percentageWithDiscount) / 100

    return priceWithDiscount
}


function priceDiscountBtn() 
{
    const PriceInput = document.getElementById('PriceInput')
    const priceValue = PriceInput.value
    
    const CouponInput = document.getElementById('CouponInput')
    const couponValue = CouponInput.value

    let discount

    switch (couponValue) {
        case 'promocion-15':
            discount = 15
            break
        case 'promocion-30':
            discount = 30
            break
        case 'promocion-50':
            discount = 50
            break
        default: 
            discount = 0
            break
    }    
    
    const priceWithDiscount = calcPriceWithDiscount(priceValue, discount)
    
    const PriceOutput = document.getElementById('PriceOutput')
    PriceOutput.innerText = `El precio con descuento es:  $${priceWithDiscount}`
}