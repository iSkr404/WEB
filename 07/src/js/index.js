import module from './module'
import '../css/style.css'

module.component();

var elem = document.createElement('div');
elem.innerHTML = module.component();
elem.classList.add('box');

document.body.appendChild(elem);
console.log("版本问题太坑了！");

import es6 from './ES6+'
console.log(es6.fn(2,3));