import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export default function Provider({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
