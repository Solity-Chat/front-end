import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * @constructor
 * Generator for the navigation bar
 */
const Navigation = () => (
  <div>
    <nav className="navbar navbar-expand-sm bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  </div>
)

/**
 * Generate the switches for the main screen
 * @constructor
 */
const Switches = () => (
  <Switch>
    <Route path="/about">
      <h1>Hello</h1>
    </Route>
    <Route path="/users">
      <h1>Hello 1</h1>
    </Route>
    <Route path="/">
      <h1>Hello 2</h1>
    </Route>
  </Switch>
)

function App() {
  return (
    <Router>
      <div>
        <nav>
          {Navigation()}
        </nav>
        {Switches()}
      </div>
    </Router>
  )
}

export default App
