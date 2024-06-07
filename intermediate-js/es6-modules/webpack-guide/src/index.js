import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import Icon from './luffy.jpg';
// import CsvData from './data.csv';
// import XmlData from './data.xml';
// import toml from './data.toml';
// import yaml from './data.yaml';
// import json from './data.json5';

const component = () => {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	btn.innerHTML = 'click me and check the console!';
	btn.onclick = printMe;


	// Lodas, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	const luffy = new Image();
	luffy.src = Icon;
	element.appendChild(luffy);
	element.appendChild(btn);

	// console.log(CsvData);
	// console.log(XmlData);
	// console.log(toml);
	// console.log(yaml);
	// console.log(json);

	return element;
}

document.body.appendChild(component());
console.log('hello from src/index.js');
