import _ from 'lodash';
const component = () => {

    const element = document.createElement('div');

    // lodash contains various string methods
    element.innerHTML = _.join(['Hello', 'webpack'],':');
    return element
}

document.body.appendChild(component());
