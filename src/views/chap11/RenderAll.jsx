import React, { Fragment } from 'react';

const RenderAll = props => <Fragment>{props.children(props)}</Fragment>;

export default RenderAll;
