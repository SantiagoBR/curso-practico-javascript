function calcPriceWithDiscount(price, coupon) {
    const percentageCode = discountCoupon(coupon)
    const percentageWithDiscount = 100 - percentageCode
    console.log(percentageCode)
    console.log(percentageWithDiscount)
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
    let promotionDiscount 

    switch (code) {
        case 'promocion-15':
            return promotionDiscount = 15
            break;
        case 'promocion-30':
            return promotionDiscount = 30
            break;
        case 'promocion-50':
            return promotionDiscount = 50
            break;
    
        default: 
            return promotionDiscount = 0
            break;
    }
}