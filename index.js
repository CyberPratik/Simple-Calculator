const reset = document.getElementById('reset');
const countLabel = document.getElementById('display');
reset.onclick = function(){
    countLabel.value = "";
}
function appendToLabel(value){
    countLabel.value+=value;
}
document.getElementsByTagName('button').value;
function calculate(){
    try {
        const result =eval(countLabel.value);
        countLabel.value = result;
    } catch (error) {
        alert("Invalid Expression!");
    }
}
