import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';

function App() {
	return (
		<div className='App'>
			<Route exact path='/'>
				<LandingPage />
			</Route>
			<Route exact path='/home'>
				<Home />
			</Route>
		</div>
	);
}

export default App;
