import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Feed from "./components/Feed/Feed";

/**
 * @constructor
 * Generator for the navigation bar
 */
const Navigation = () => (
  <div className="app-navigation">
    <nav className="navbar navbar-expand-sm">
      <ul className="navbar-nav app-navigation-list ">
        <li className="app-navigation-list-item">
          <button type="button" className="btn btn-primary">
            <Link to="/" className="app-navigation-link-item">
              Home
            </Link>
          </button>
        </li>
        <li className="app-navigation-list-item">
          <button type="button" className="btn btn-primary">
            <Link to="/feed" className="app-navigation-link-item">
              Feed
            </Link>
          </button>
        </li>
        <li className="app-navigation-list-item">
          <button type="button" className="btn btn-primary">
            <Link to="/users" className="app-navigation-link-item">
              Active users
            </Link>
          </button>
        </li>
        <li className="app-navigation-list-item">
          <button type="button" className="btn btn-primary">
            <Link to="/media" className="app-navigation-link-item">
              Media
            </Link>
          </button>
        </li>
      </ul>
    </nav>
    <div className="notifications">
      <svg
        className="bi bi-chat-dots-fill"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
);

/**
 * Generate the switches for the main screen
 * @constructor
 */
const Switches = () => (
  <Switch>
    <Route path="/feed">
      <Feed />
    </Route>
    <Route path="/users">
      <h1>Hello 2</h1>
    </Route>
    <Route path="/media">
      <h1>Hello 2</h1>
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

const App = () => (
  <Router>
    <div className="app">
      {Navigation()}
      {Switches()}
    </div>
  </Router>
);

export default App;
