import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '@/styles/TabSelector.css';

export default class TabSelector extends PureComponent {
  //用于检查类型
  static propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  //默认prop值
  static defaultProps = {
    options: [],
    value: null,
    onChange: () => {}
  };

  //渲染
  render() {
    const { options, value, onChange } = this.props;
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
    color: null
  };
  // 渲染
  render() {
    return (
      <div>
        Select color:{' '}
        <TabSelector
          options={options}
          value={this.state.color}
          onChange={val => this.setState({ color: val })}
        />
      </div>
    );
  }
}
