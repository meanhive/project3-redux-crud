import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Menu from './View/Menu';
import Home from './View/Home';
import Create from './View/Create';
import Update from './View/Update';

 class App extends Component {
  render() {
    return (
      <Router>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home} {...this.state} />
                <Route exact path="/home" component={Home} {...this.state} />
                <Route path="/create" component={Create}  {...this.state}  />
                <Route path="/update/:id" component={Update}  {...this.state}  />
            </Switch>
      </Router>
    )
  }
}

export default App;