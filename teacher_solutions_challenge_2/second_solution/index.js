const coupons = [
    'promocion-15',
    'promocion-30',
    'promocion-50'
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
    
    let discount 
    
    if (!coupons.includes(couponValue)) {
        alert(`El cupón ${couponValue} no es válido`)
    } else if ( couponValue === 'promocion-15') {
        discount = 15
    } else if ( couponValue === 'promocion-30') {
        discount = 30
    } else if ( couponValue === 'promocion-50') {
        discount = 50
    }

    const priceWithDiscount = calcPriceWithDiscount(priceValue, discount)
    
    const PriceOutput = document.getElementById('PriceOutput')
    PriceOutput.innerText = `El precio con descuento es:  $${priceWithDiscount}`
}