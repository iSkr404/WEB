import '../css/style.css'
function component() {
    var elem = document.createElement('div');
    elem.innerHTML = "这是一个div";
    elem.classList.add('box');

    return elem;
}
document.body.appendChild(component());