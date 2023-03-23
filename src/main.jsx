import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// ! Browser router base should be removed once site is put on SMAA domain
ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter basename='/san-marcos-abortion-activists'>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
);
