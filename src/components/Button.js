import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
	box-sizing: border-box;
	display: inline-block;
	text-align: center;
	padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
	color: ${(props) =>
		props.variant === 'primary'
			? props.theme.colors.background
			: props.theme.colors.primary};
	background-color: ${(props) =>
		props.variant === 'primary'
			? props.theme.colors.primary
			: props.theme.colors.background};
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.primary};
	border-radius: ${(props) => props.theme.radii.round};
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.m};
	text-decoration: none;

	&:hover:not(:disabled),
	&:active:not(:disabled),
	&:focus {
		outline: 0;
		color: ${(props) => props.theme.colors.background};
		border-color: ${(props) => props.theme.colors.accent};
		background-color: ${(props) => props.theme.colors.accent};
		cursor: pointer;
	}

	&:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}
`;

Button.propTypes = {
	variant: PropTypes.oneOf(['secondary', 'primary']),
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	variant: 'secondary',
};

export default Button;
