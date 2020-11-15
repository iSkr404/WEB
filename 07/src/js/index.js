import mod from './module';
import es6 from './ES6+';
import '../css/style.css';

mod.component();

var elem = document.createElement('div');
elem.innerHTML = mod.component();
elem.classList.add('box');

document.body.appendChild(elem);
console.log("版本问题太坑了！");

console.log(es6.fn(2,3));

var fn=bar;