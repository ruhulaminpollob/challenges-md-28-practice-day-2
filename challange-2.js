document.getElementById('submit').addEventListener('click', function () {
    const priceFiled=document.getElementById('price')
    const getPriceFiledString=priceFiled.value;
    priceFiled.value='';
    const getPriceFiled=parseInt(getPriceFiledString);

    const getCouponFiled=document.getElementById('coupon');
    const coupon=getCouponFiled.value;
    getCouponFiled.value=''

    const getTotal=document.getElementById('total');
    
    if (coupon=='Disco') {
        getTotal.innerText=(getPriceFiled * 0.7).toFixed(2);
    }else{
        getTotal.innerText=(getPriceFiled).toFixed(2)
    }
})