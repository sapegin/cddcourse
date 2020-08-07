import styled from 'styled-components';
import PropTypes from 'prop-types';
import css from '@styled-system/css';
import { variant } from 'styled-system';

const variants = {
	primary: {
		color: 'background',
		backgroundColor: 'primary',
	},
	secondary: {
		color: 'primary',
		backgroundColor: 'background',
	},
};

const Button = styled.button(
	css({
		boxSizing: 'border-box',
		display: 'inline-block',
		textAlign: 'center',
		px: 4,
		py: 3,
		color: (props) => (props.variant === 'primary' ? 'background' : 'primary'),
		backgroundColor: (props) =>
			props.variant === 'primary' ? 'primary' : 'background',
		border: '1px solid',
		borderColor: 'primary',
		borderRadius: 'round',
		fontFamily: 'body',
		fontSize: 'm',
		textDecoration: 'none',

		'&:hover:not(:disabled),&:active:not(:disabled),&:focus': {
			outline: 0,
			color: 'background',
			borderColor: 'accent',
			backgroundColor: 'accent',
			cursor: 'pointer',
		},

		'&:disabled': {
			opacity: 0.6,
			filter: 'saturate(60%)',
		},
	}),
	variant({ variants })
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
