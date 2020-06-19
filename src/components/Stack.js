import styled from 'styled-components';
import { system } from 'styled-system';
import PropTypes from 'prop-types';
import Box from './Box';

const Stack = styled(Box)(
	system({
		gap: {
			property: '&& > * + *',
			scale: 'space',
			transform: (value, scale) => ({ marginTop: scale[value] }),
		},
	})
);

Stack.propTypes = {
	...Box.propProps,
	/** Spacing between children */
	gap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.number),
	]),
};

export default Stack;
