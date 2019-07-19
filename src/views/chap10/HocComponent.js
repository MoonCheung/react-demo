import React from 'react';
import Login from './Login'; //子组件
import LoadIndicator from './LoadIndicator'; //子组件
import { Button } from 'antd';

const Title = ({ value }) => <h1>{value}</h1>;
const Desc = ({ value }) => <p>{value}</p>;

const LoadingTitle = LoadIndicator(Title);
const LoadingDesc = LoadIndicator(Desc);
const LogoutButton = Login(() => <Button type="primary">Logout</Button>);

const HocComponent = () => (
  <div>
    <LoadingTitle />
    <LoadingDesc value="hello world" />
    <LogoutButton />
  </div>
);

export default HocComponent;
