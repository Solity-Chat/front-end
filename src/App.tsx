import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Feed from "./components/Feed/Feed";
import ActiveUsersFeed from "./components/User/ActiveUsersFeed";

/**
 * Mocked date test-purpose only
 */
const users = [
  {
    userName: "Jane Doe",
    userBio: "Architect and engineer. Very eager to meet new people",
  },
  {
    userName: "Jane Doe",
    userBio: "Architect and engineer. Very eager to meet new people",
  },
  {
    userName: "Jane Doe",
    userBio: "Architect and engineer. Very eager to meet new people",
  },
  {
    userName: "Jane Doe",
    userBio: "Architect and engineer. Very eager to meet new people",
  },
  {
    userName: "Jane Doe",
    userBio: "Architect and engineer. Very eager to meet new people",
  },
  {
    userName: "Jane Doe",
    userBio: "Architect and engineer. Very eager to meet new people",
  },
  {
    userName: "Jane Doe",
    userBio: "Architect and engineer. Very eager to meet new people",
  },
  {
    userName: "Jane Doe",
    userBio: "Architect and engineer. Very eager to meet new people",
  },
];
/**
 * Mocked date test-purpose only
 */
const cards = [
  {
    cardTitle: "GUI Update 1",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
  {
    cardTitle: "GUI Update 2",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
  {
    cardTitle: "GUI Update 3",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
  {
    cardTitle: "GUI Update 4",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
  {
    cardTitle: "GUI Update 5",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
  {
    cardTitle: "GUI Update 6",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
  {
    cardTitle: "GUI Update 7",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
  {
    cardTitle: "GUI Update 8",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
  {
    cardTitle: "GUI Update 9",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
  {
    cardTitle: "GUI Update 10",
    cardContent:
      "The latest GUI updated was an integration of the old GUI with the Electron.js technologies",
    cardDate: "today",
  },
];

/**
 * Mocked date test-purpose only
 */
const messages = [
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    messageStatus: 0,
    messageSender: "Jane Doe",
    messageContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

/**
 * @constructor
 * Generator for the navigation bar
 */
const Navigation = () => {
  const [mode, setMode] = useState("light");
  const modeSwitcher = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
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
      <div className="mode">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitches"
            onClick={() => modeSwitcher()}
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
};

/**
 * Generate the switches for the main screen
 * @constructor
 */
const Switches = () => (
  <Switch>
    <Route path="/feed">
      <Feed messages={messages} />
    </Route>
    <Route path="/users">
      <ActiveUsersFeed users={users} />
    </Route>
    <Route path="/media">
      <h1 className="m-2">The media manager is empty</h1>
    </Route>
    <Route path="/">
      <Home cards={cards} />
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
