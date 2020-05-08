import styled from 'styled-components';
import PropTypes from 'prop-types';
import css from '@styled-system/css';
import { variant } from 'styled-system';

const Button = styled.button(
	css({
		boxSizing: 'border-box',
		display: 'inline-block',
		textAlign: 'center',
		px: 4,
		py: 3,
		border: 'thin',
		borderColor: 'primary',
		borderRadius: 'round',
		fontFamily: 'body',
		fontSize: 'm',
		textDecoration: 'none',
		userSelect: 'none',

		'&:hover:not(:disabled), &:active:not(:disabled), &:focus': {
			outline: 0,
			color: 'background',
			borderColor: 'accent',
			backgroundColor: 'accent',
			cursor: 'pointer',
		},
	}),
	variant({
		variants: {
			primary: {
				color: 'background',
				backgroundColor: 'primary',
			},
			secondary: {
				color: 'primary',
				backgroundColor: 'background',
			},
		},
	})
);

Button.propTypes = {
	variant: PropTypes.oneOf(['secondary', 'primary']),
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	variant: 'secondary',
};

export default Button;
