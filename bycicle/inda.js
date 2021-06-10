let formRegister = document.querySelector('#window');
let button = document.querySelector('.regButton');
let divClose = document.querySelector('.close');
let shadow  = document.createElement('div');
shadow.id = "shadow";

function open(){
document.body.append(shadow);
formRegister.style.opacity = 1;
}
function close(){
    shadow.parentNode.removeChild(shadow);
    formRegister.style.opacity = 0;
}
button.onclick = open ;
divClose.onclick = close;
shadow.onclick = close;