import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    element.textContent = myName('David');
    element.classList.add('hello');


    return element;
}

document.body.appendChild(component());

