import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContextProvider from './Contexts/state'
import Router from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ContextProvider>
		<Router />
	</ContextProvider>
);
