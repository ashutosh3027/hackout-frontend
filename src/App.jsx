import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/users/Homepage'
import Admin from './pages/admin/Admin';
import Userdashboard from './pages/users/Userdashboard';

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/admin' exact component={Admin} />
      <Route path='/:userId/dashboard' exact component={Userdashboard} />
    </Router>
  );
}

export default App;
