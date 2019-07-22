import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '@/styles/TabSelector.css';

export default class TabSelector extends PureComponent {
  //用于检查类型
  static propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.func
  };

  //默认prop值
  static defaultProps = {
    options: [],
    value: null,
    onChange: () => {},
    children: () => {}
  };

  //渲染
  render() {
    const { options, value, onChange, children } = this.props;
    return (
      <div className="tab-selector">
        <ul>
          {options.map((opt, index) => (
            <li
              key={index}
              className={`tab-item ${opt.value === value ? 'selected' : ''}`}
              onClick={() => onChange(opt.value)}>
              {opt.name}
            </li>
          ))}
        </ul>
        <br />
        <br />
        {value && children(value)}
      </div>
    );
  }
}

const options = [
  { name: 'Red', value: 'red' },
  { name: 'Blue', value: 'blue' },
  { name: 'Orange', value: 'orange' }
];

export class TabSelectorSample extends PureComponent {
  // 自身组件状态
  state = {
    color: null,
    animal: null
  };
  // 渲染
  render() {
    return (
      <div>
        <h3>Select color:</h3>
        <TabSelector
          options={options}
          value={this.state.color}
          onChange={val => this.setState({ color: val })}>
          {color => (
            <span
              style={{
                display: 'inline-block',
                backgroundColor: color,
                width: '50px',
                height: '50px'
              }}
            />
          )}
        </TabSelector>
      </div>
    );
  }
}
