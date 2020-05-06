import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Scream = styled.p`
	font-family: ${(props) => props.theme.fonts.heading};
	color: ${(props) => props.theme.colors.primary};
	font-size: ${(props) => props.theme.fontSizes.xl};
`;

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Scream>Aaaaaaaaaa!</Scream>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
