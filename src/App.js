import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from '@/icons/logo.svg';
import routes from '@/router';
import '@/styles/App.css';

const styles = {
  padding: '10px',
  width: '10%',
  background: '#f0f0f0'
};

const App = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={styles}>
        <div>{/* <img src={logo} className="App-logo" alt="logo" /> */}</div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/chat">chat</Link>
          </li>
          <li>
            <Link to="/bubblegum">Second</Link>
          </li>
          <li>
            <Link to="/shoelaces">Thirdly</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route key={index} path={route.path} exact={route.exact} />
        ))}
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
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
    </div>
  </Router>
);

export default App;
