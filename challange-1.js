

function getAndSet(inputId, setId) {
    // get value
    const InputFiled=document.getElementById(inputId);
    const inputValueString=InputFiled.value;
    const inputValue=parseFloat(inputValueString);
    // get deposit set value and location
    const getSetLocation=document.getElementById(setId);
    const setValueString=getSetLocation.innerText;
    const setValue=parseFloat(setValueString);
    //get balance set value and location

    // set 
    getSetLocation.innerText=inputValue+setValue;

}
document.getElementById('deposit-btn').addEventListener('click',function () {
    getAndSet('deposit-filed', 'deposit-total')
    
})