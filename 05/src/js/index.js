import module from './module'
import '../css/style.css'
import axios from 'axios'

module.component();

var elem = document.createElement('div');
elem.innerHTML = module.component();
elem.classList.add('box');

document.body.appendChild(elem);
console.log("版本问题太坑了！");

axios.get('/api/data.json').then(res=>{
    console.log(res);
})