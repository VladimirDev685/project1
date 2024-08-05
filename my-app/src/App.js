import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import { createElement } from 'react';

const currentDate = moment().format('YYYY');//декларативный подход
const form = function Form() { //декларативный подход
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement('p',null,'Edit ',createElement('code',null,'src/App.js'), ' and save to reload'),
			createElement('a',{className:'App-link',
				href:'https://reactjs.org',
				target:'_blank',
				rel:'noopener noreferrer'},'Learn React'),
				currentDate
		),
	);
};
export const App = () => {//декларативный подход
	return createElement(form);//декларативный подход
};
