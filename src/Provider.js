import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export function Provider({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
