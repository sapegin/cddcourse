import styled from 'styled-components';
import Box from './Box';

const Grid = styled(Box)({
	display: 'grid',
});

Grid.propTypes = Box.propTypes;

export default Grid;
