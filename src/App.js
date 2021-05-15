import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import Home from './pages/Home';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}

export default App;