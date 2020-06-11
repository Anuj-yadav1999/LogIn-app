import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';

const App = () => {
    return(
        <Router>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route path='/LoggedIn' render={(props) => <LogIn {...props} />}/>
        </Router>
    )
}

export default App;