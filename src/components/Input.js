import styled from 'styled-components';
import css from '@styled-system/css';

const Input = styled.input(
	css({
		boxSizing: 'border-box',
		display: 'block',
		width: '100%',
		margin: 0,
		padding: 'm',
		border: 'thin',
		borderColor: 'primary',
		borderRadius: 'base',
		fontFamily: 'body',
		fontSize: 'm',
		color: 'text',
		backgroundColor: 'background',
		boxShadow: 'none',

		'&:focus': {
			outline: 0,
			borderColor: 'accent',
		},

		'&:disabled': {
			opacity: 0.6,
			filter: 'saturate(60%)',
		},
	})
);

export default Input;
