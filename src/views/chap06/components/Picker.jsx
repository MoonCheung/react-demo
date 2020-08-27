import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const Picker = ({ value, onChange, options }) => (
  <span>
    <h1>{value}</h1>
    <Select defaultValue={value} style={{ width: 120 }} onChange={onChange}>
      {options.map(option => (
        <Option value={option} key={option}>
          {option}
        </Option>
      ))}
    </Select>
  </span>
);

//用来检查类型
Picker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Picker;
