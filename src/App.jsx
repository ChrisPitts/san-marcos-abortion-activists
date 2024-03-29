// Styles
import './css/App.scss';

// React Hooks
import { Route , Routes} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Kits from './pages/Kits';
import Resources from './pages/Resources';
import FormSubmitted from './pages/FormSubmitted';
import Slack from './pages/Slack';
import PageError from './pages/PageError';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/kits' element={<Kits />} />
				<Route path='/resources' element={<Resources />} />
				<Route path='/formsubmitted' element={<FormSubmitted />} />
				<Route path='/slack' element={<Slack />} />
				<Route path='*' element={<PageError />} />
			</Routes>
		</>
	);
}

export default App;
