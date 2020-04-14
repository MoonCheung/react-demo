import { BrowserRouter as Router , Route, Link } from 'react-router-dom';
import logo from '@/icons/logo.svg';
import { Row, Col } from 'antd';
import routes from '@/router';
import React from 'react';
import '@/styles/App.scss';

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
              <li>
                <Link to="/suspense">Suspense API</Link>
              </li>
              <li>
                <Link to="/hoock">Hoock API</Link>
              </li>
              <li>
                <Link to="/refs">RefsAndDom</Link>
              </li>
              <li>
                <Link to="/designmodule">设计模式:傻瓜和聪明组件</Link>
              </li>
              <li>
                <Link to="/designmodule1">设计模式:高阶组件</Link>
              </li>
              <li>
                <Link to="/designmodule2">设计模式:render props 模式</Link>
              </li>
              <li>
                <Link to="/designmodule3">设计模式:提供者模式</Link>
              </li>
              <li>
                <Link to="/designmodule4">设计模式:组合模式</Link>
              </li>
              <li>
                <Link to="/stopwatch">示例: 秒表</Link>
              </li>
            </ul>
            <Header name="生态篇" />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to="/redux">Redux状态管理</Link>
              </li>
              <li>
                <Link to="/redux_1">示例: Reddit列表</Link>
              </li>
              <li>
                <Link to="/mobx">Mobx状态管理</Link>
              </li>
              <li>
                <Link to="/route_1">路由参数</Link>
              </li>
              <li>
                <Link to="/route_2">嵌套路由参数</Link>
              </li>
            </ul>
            <Header name="常见场景的最佳实践" />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to="/form">使用React Router管理登录和授权</Link>
              </li>
              <li>
                <Link to="/content">内容页的加载与缓存(暂时)</Link>
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
