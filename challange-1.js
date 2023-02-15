

function getAndSet(inputId, setId,isDeposit) {
    // get value
    const inputFiled=document.getElementById(inputId);
    if (isNaN(inputFiled.value)) {
        inputFiled.value='';
        alert('input a number')
        return;
    }
    const inputValueString=inputFiled.value;
    inputFiled.value='';
    
    const inputValue=parseFloat(inputValueString);
    // get deposit set value and location
    const getSetLocation=document.getElementById(setId);
    const setValueString=getSetLocation.innerText;
    const setValue=parseFloat(setValueString);

    // set 
    if (setValue <= 0) {
        return;
    }else{
        getSetLocation.innerText=inputValue + setValue;
    }
    //get balance set value and location
    const getBalanceLocation=document.getElementById('balance-total');
    
    const balanceTotalString=getBalanceLocation.innerText;
    const balanceTotal=parseFloat(balanceTotalString);

    if (isDeposit===true) {
        
        getBalanceLocation.innerText=balanceTotal + inputValue;
    } else if(isDeposit===false){
        
        getBalanceLocation.innerText=balanceTotal - inputValue;
    }
    
}

document.getElementById('deposit-btn').addEventListener('click',function () {
    getAndSet('deposit-filed', 'deposit-total',true)
    
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    getAndSet('withdraw-filed', 'withdraw-total',false)
})