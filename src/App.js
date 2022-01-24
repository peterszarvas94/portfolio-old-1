import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import Home from './pages/Home';
import WeatherApp from './pages/weather/WeatherApp';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/pages/weather' exact>
					<WeatherApp />
				</Route>
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}

export default App;