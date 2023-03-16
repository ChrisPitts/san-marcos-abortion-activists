import './css/App.scss';
import { Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Kits from './pages/Kits';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/kits' element={<Kits />} />
			</Routes>
		</>
	);
}

export default App;
