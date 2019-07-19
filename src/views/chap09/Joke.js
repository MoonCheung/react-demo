import React from 'react';
import SmileFace from '@/assets/images/yaoming_simile.png';

// TODO:把渲染界面的逻辑放在子组件，也就是傻瓜组件,无状态
// TODO:函数形式的 React 组件，好处是不需要管理 state，占用资源少，但是，函数形式的组件无法利用 shouldComponentUpdate
// TODO:PureComponent 中 shouldComponentUpdate 对 props 做得只是浅层比较，不是深层比较，如果 props 是一个深层对象，就容易产生问题。
// class Joke extends React.PureComponent {
//   //渲染函数
//   render() {
//     return (
//       <div>
//         <img src={SmileFace} alt="Yaoming" />
//         {this.props.value || 'loading...'}
//       </div>
//     );
//   }
// }

// TODO: React v16.6.0 之后的版本,React.memo 既利用了 shouldComponentUpdate，又不要求我们写一个 class，这也体现出 React 逐步向完全函数式编程前进。
const Joke = React.memo(props => (
  <div>
    <img src={SmileFace} alt="Yaoming" />
    {props.value || 'loading...'}
  </div>
));

export default Joke;
