function calcPriceWithDiscount(price, coupon) {
    const percentageCode = discountCoupon(coupon)
    const percentageWithDiscount = 100 - percentageCode
    const priceWithDiscount = (price * percentageWithDiscount) / 100

    return priceWithDiscount
}


function priceDiscountBtn () 
{
    const PriceInput = document.getElementById('PriceInput')
    const priceValue = PriceInput.value
    
    const CouponInput = document.getElementById('CouponInput')
    const couponValue = CouponInput.value

    const priceWithDiscount = calcPriceWithDiscount(priceValue, couponValue)

    const PriceOutput = document.getElementById('PriceOutput')
    PriceOutput.innerText = `El precio con descuento es:  $${priceWithDiscount}`
}

function discountCoupon (code) {
    let discount 

    switch (code) {
        case 'promocion-15':
            return discount = 15
            break;
        case 'promocion-30':
            return discount = 30
            break;
        case 'promocion-50':
            return discount = 50
            break;
    
        default: 
            return discount = 0
            break;
    }
}