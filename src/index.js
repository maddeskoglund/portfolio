import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/about';
import Contact from './components/contact';
import Cv from './components/cv';
import Whoops from './components/whoops';

render((



    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/cv' component={Cv} />
            <Route component={Whoops} />
        </Switch>

    </BrowserRouter>

), document.getElementById('root'));
registerServiceWorker();



// ReactDOM.render(<App />, document.getElementById('root'));
