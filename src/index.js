import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContextProvider from './Contexts/state'
import NavigationBar from './Pages/NavigationBar';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ContextProvider>
		<BrowserRouter>
			<NavigationBar />
		</BrowserRouter>
	</ContextProvider>
);
