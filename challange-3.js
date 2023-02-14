const textElement=document.getElementById('text-filed');


function change(commandBtn, btnId) {
    
    const getClassName =textElement.classList;
    const getBtnClassName =document.getElementById(btnId).classList;
    // const getClassName =textElement.classList.add(commandBtn);
    const getClassNameArray = Object.values(getClassName);

    if (getClassNameArray.includes(commandBtn)) {
        getClassName.remove(commandBtn);
        getBtnClassName.remove('bg-sky-400','text-white')
    }else{
        getClassName.add(commandBtn);
        getBtnClassName.add('bg-sky-400','text-white')
    }   
}

document.getElementById('bold-btn').addEventListener('click', function () {
    change('font-bold','bold-btn')
})
document.getElementById('italic-btn').addEventListener('click', function () {
    change('italic','italic-btn')
})
document.getElementById('underline-btn').addEventListener('click', function () {
    change('underline','underline-btn')
})
document.getElementById('align-start-btn').addEventListener('click', function () {
    change('align-start','align-start-btn')
})
document.getElementById('align-center-btn').addEventListener('click', function () {
    change('text-center','align-center-btn')
})
document.getElementById('align-left-btn').addEventListener('click', function () {
    change('text-end','align-left-btn')
})
document.getElementById('align-justify-btn').addEventListener('click', function () {
    change('text-justify','align-justify-btn')
})


document.getElementById('font-size-btn').addEventListener('keyup',function () {
    document.getElementById('font-size-btn')
})
function changeFontSize() {
    const fontNumber = document.getElementById("font-size-btn");
    const value = fontNumber.value;
    textElement.style.fontSize = (value+1) + "px";
    }


document.getElementById('case-btn').addEventListener('click', function () {
    change('uppercase','case-btn')
})
document.getElementById('text-color-btn').addEventListener('blur',function () {
    const colorValue = document.getElementById('text-color-btn').value;
    const creatClassName ='text-['+colorValue+']';
    change(creatClassName, 'text-color-btn')
    
})
