import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContextProvider from './Contexts/state'
import Router from './Routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const THEME = createTheme({
	typography: {
		"fontFamily": `"IBM Plex Sans Thai", sans-serif`,
		//  "fontSize": 14,
		//  "fontWeightLight": 300,
		//  "fontWeightRegular": 400,
		//  "fontWeightMedium": 500
	}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={THEME}>
		<ContextProvider>
			<Router />
		</ContextProvider>
	</ThemeProvider>
);
