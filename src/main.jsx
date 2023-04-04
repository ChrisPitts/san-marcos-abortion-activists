// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App';
import ScrollToTop from './components/ScrollToTop';


ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<ScrollToTop />
			<App />
		</React.StrictMode>
	</BrowserRouter>
);
