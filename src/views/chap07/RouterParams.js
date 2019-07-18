import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';

const Topic = ({ match }) => <h1>话题: {match.params.id}</h1>;

export default class RouterParams extends React.PureComponent {
  //渲染函数
  render() {
    return (
      <Router>
        <div>
          <ul id="menu">
            <li>
              <Link to="/topic/1">话题 1</Link>
            </li>
            <li>
              <Link to="/topic/2">话题 2</Link>
            </li>
            <li>
              <Link to="/topic/3">话题 3</Link>
            </li>
          </ul>
        </div>
        <div id="page-container">
          <Route path="/topic/:id" component={Topic} />
        </div>
      </Router>
    );
  }
}
