import './css/App.scss';
import { Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Kits from './pages/Kits';
import Resources from './pages/Resources';
import FormSubmitted from './pages/FormSubmitted';
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
				<Route path='*' element={<PageError />} />
			</Routes>
		</>
	);
}

export default App;
