import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    button.innerHtml = 'Click me';
    button.addEventListener('click', () => printMe());
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    element.appendChild(button);

    return element;
}

document.body.appendChild(component());
