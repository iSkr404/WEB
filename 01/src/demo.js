import _ from 'lodash'
// 样式资源
import './style.css'
// 文件资源
import myImgurl from './1+x.png'
// 加载数据资源
import data from './data.xml'

// 引入一个方法
import printMe from './print'
function component() {
    var elem = document.createElement('div');
    elem.innerHTML = _.join(['你好', 'Webpack'], '');
    elem.classList.add('box');

    // 将图像添加到我们现有的div。
    var myImg=new Image();
    myImg.src=myImgurl;
    elem.appendChild(myImg);

    var btn=document.createElement('button');
    btn.innerHTML="这是一个按钮";
    btn.onclick=function(){
        printMe();
    }
    elem.appendChild(btn);

    // 输出加载来的数据
    console.log(data);
    return elem;
}
document.body.appendChild(component());