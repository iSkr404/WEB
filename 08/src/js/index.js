import module from './module'
import '../css/style.css'

module.component();

var elem = document.createElement('div');
elem.innerHTML = module.component();
elem.classList.add('box');

document.body.appendChild(elem);
// 版本问题太坑了！
console.log("版本问题太坑了！");