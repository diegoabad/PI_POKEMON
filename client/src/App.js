import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import PokeCreate from './components/PokeCreate';
import LandingPage from './components/LandingPage';
import Error from './components/Error';
function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/create'>
					<PokeCreate />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
