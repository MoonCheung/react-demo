import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '@/icons/logo.svg';
import { Row, Col } from 'antd';
import routes from '@/router';
import React from 'react';
import '@/styles/App.css';

//可复用的组件
const Header = props => <p>{props.name}</p>;

const App = () => (
  <Router>
    <div className="home">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">
            <img src={logo} className="App-logo" alt="logo" />
            <Header name="基础篇" />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to="/chat">生命周期</Link>
              </li>
              <li>
                <Link to="/comment">N个组件考虑UI构建</Link>
              </li>
              <li>
                <Link to="/tabsel">PropTypes类型检查</Link>
              </li>
              <li>
                <Link to="/clock">State & 生命周期1</Link>
              </li>
              <li>
                <Link to="/snapshot">State & 生命周期2</Link>
              </li>
              <li>
                <Link to="/locale">Context API</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="gutter-row" span={18}>
          <div className="gutter-box">
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  </Router>
);

export default App;
