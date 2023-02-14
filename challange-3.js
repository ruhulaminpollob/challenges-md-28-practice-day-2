const textElement=document.getElementById('text-filed');


function change(commandBtn) {
    const getClassName =textElement.classList.add(commandBtn);
}
document.getElementById('bold-btn').addEventListener('click', function () {
    change('font-bold')
})
document.getElementById('italic-btn').addEventListener('click', function () {
    change('italic')
})
document.getElementById('underline-btn').addEventListener('click', function () {
    change('underline')
})
document.getElementById('align-start-btn').addEventListener('click', function () {
    change('align-start')
})
document.getElementById('align-center-btn').addEventListener('click', function () {
    change('text-center')
})
document.getElementById('align-left-btn').addEventListener('click', function () {
    change('text-end')
})
document.getElementById('align-justify-btn').addEventListener('click', function () {
    change('text-justify')
})
document.getElementById('case-btn').addEventListener('click', function () {
    change('uppercase')
})
