import React from "react";
import Message, { MessageProps } from "./Message";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "../../styles/Feed/Feed.css";

export interface FeedProps {
  messages: MessageProps[];
}

const Feed = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col conversations">
          <h3>Messages</h3>
          <ul>
            <li>
              <Link to={`${url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
              <Link to={`${url}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${url}/props-v-state`}>Props v. State</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/:topicId`}>
              <Conversation />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Feed;
