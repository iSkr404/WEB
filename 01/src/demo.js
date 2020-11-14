import _ from 'lodash'
import './style.css'
import myImgurl from './1+x.png'
function component() {
    var elem = document.createElement('div');
    elem.innerHTML = _.join(['Hello', 'Webpack'], '');
    elem.classList.add('box');

    // 将图像添加到我们现有的div。
    var myImg=new Image();
    myImg.src=myImgurl;
    elem.appendChild(myImg);
    return elem;
}
document.body.appendChild(component());