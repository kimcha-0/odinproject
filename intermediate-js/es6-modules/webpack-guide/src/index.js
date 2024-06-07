import _ from 'lodash';
import './style.css';

const component = () => {
	const element = document.createElement('div');

	// Lodas, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	return element;
}

document.body.appendChild(component());
console.log('hello from src/index.js');