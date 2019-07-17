import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import React from 'react';

const Category = ({match}) => (
  <h1>Sub Category {match.params.subId}</h1>
)

const SubCategory = ({match}) => (
  <div>
    <h1>类别: {match.params.id}</h1>
    <ul id="menu">
      <li>
        <Link to={`/category/${match.params.id}/sub/1`}>
          子类别 1
        </Link>
      </li>
      <li>
        <Link to={`/category/${match.params.id}/sub/2`}>
          子类别 2
        </Link>
      </li>
      <li>
        <Link to={`/category/${match.params.id}/sub/3`}>
          子类别 3
        </Link>
      </li>
    </ul>
    <div id="page-container-2">
      <Route path="/category/:id/sub/:subId" component={Category} />
    </div>
  </div>
)

export default class NestedRouter extends React.PureComponent {
  //渲染函数
  render() {
    return (
      <Router>
        <div>
          <ul id="menu">
            <li>
              <Link to="/category/1">分类 1</Link>
            </li>
            <li>
              <Link to="/category/2">分类 2</Link>
            </li>
            <li>
              <Link to="/category/3">分类 3</Link>
            </li>
          </ul>

          <div id="page-container">
            <Route path="/category/:id" component={SubCategory} />
          </div>
        </div>
      </Router>
    )
  }
}