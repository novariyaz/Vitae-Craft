import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom'
import Editor from './pages/Editor';
import Home from './pages/Home';

function App() {
  return (
   <Router basename="/Mini-project">
     <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/editor/:id" component={Editor} />
     </Switch>
   </Router>
  );
}

export default App;
