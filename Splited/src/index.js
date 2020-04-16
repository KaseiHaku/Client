import _ from 'lodash';
import './style.css';
import Icon from './favicon.ico';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello 透', 'webpack 过'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们已经存在的 div 中。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);


    var btn = document.createElement('button');
    btn.innerHTML = '点击这里，然后查看 console！';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());