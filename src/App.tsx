import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Feed from "./components/Feed/Feed";
import ActiveUsersFeed from "./components/User/ActiveUsersFeed";
import Login from "./components/Authentication/Login";

import { conversations } from "./mock-objects/mockedConversations";
import { cards } from "./mock-objects/mockedUpdates";
import { users } from "./mock-objects/mockedUsers";
import Error from "./components/Error";

export interface SwitchesData {
  authData: boolean;
  authHandler: Function;
}

const App = () => {
  let [authData, setAuthData] = useState(false);

  const authHandler = (_authData: boolean) => {
    setAuthData(_authData);
  };

  const Navigation = () => (
    <div className="app-navigation">
      <nav className="navbar navbar-expand-sm">
        <ul className="navbar-nav app-navigation-list ">
          <li className="app-navigation-list-item">
            <button type="button" className="btn btn-primary">
              <Link to="/" className="app-navigation-link-item">
                Login
              </Link>
            </button>
          </li>
          <li className="app-navigation-list-item">
            <button type="button" className="btn btn-primary">
              <Link to="/home" className="app-navigation-link-item">
                Home
              </Link>
            </button>
          </li>
          <li className="app-navigation-list-item">
            <button type="button" className="btn btn-primary">
              <Link to="/feed" className="app-navigation-link-item">
                Feed <span className="badge badge-pill badge-info">6</span>
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
      <div className="features">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitches"
          />
          <label className="custom-control-label" htmlFor="customSwitches">
            <svg
              className="bi bi-brightness-high"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="logo">
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

  const Switches = (data: SwitchesData) => (
    <Switch>
      <Route path="/feed">
        {data.authData ? <Feed conversations={conversations} /> : <Error />}
      </Route>
      <Route path="/users">
        {data.authData ? <ActiveUsersFeed users={users} /> : <Error />}
      </Route>
      <Route path="/media">
        {data.authData ? (
          <h1 className="m-2">The media manager is empty</h1>
        ) : (
          <Error />
        )}
      </Route>
      <Route path="/home">
        {data.authData ? <Home cards={cards} /> : <Error />}
      </Route>
      <Route path="/">
        <Login authHandler={authHandler} />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <div className="app">
        {Navigation()}
        {Switches({ authData, authHandler })}
      </div>
    </Router>
  );
};

export default App;
