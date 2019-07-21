module.exports = {
  root: true,
  // 解析 ES6 语法
  parser: 'babel-eslint',
  // 环境定义了预定义的全局变量
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    $: true
  },
  // JavaScript 语言选项
  parserOptions: {
    // 想使用的额外的语言特性:
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      // 启用 JSX
      jsx: true,
      legacyDecorators: true
    },
    sourceType: 'module',
    // ECMAScript版本
    ecmaVersion: 6
  },
  plugins: ['prettier', 'react'],
  rules: {
    /**
     * off 或 0：表示不验证规则。
     * warn 或 1：表示验证规则，当不满足时，给警告
     * error 或 2 ：表示验证规则，不满足时报错
     */
    // 关闭冲突规则
    'prettier/prettier': [
      'error',
      {
        printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
        tabWidth: 2, // 一个tab代表几个空格数，默认为80
        useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
        singleQuote: true, // 默认为false，如需使用单引号设置true
        semi: true, // 行尾是否使用分号，默认为true
        trailingComma: 'none', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
        bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
        jsxBracketSameLine: true
      }
    ],

    //////////////
    // React.相关 //
    //////////////
    'jsx-a11y/anchor-is-valid': 'off', //href属性校验关闭
    'jsx-quotes': [2, 'prefer-double'], //强制在JSX属性（jsx-quotes）中一致使用双引号
    'react/display-name': 0, //防止在React组件定义中丢失displayName
    //禁止某些propTypes
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any']
      }
    ],
    'react/jsx-boolean-value': 2, //在JSX中强制布尔属性符号
    'react/jsx-closing-bracket-location': 1, //在JSX中验证右括号位置
    //在JSX属性和表达式中加强或禁止大括号内的空格。
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'never',
        children: true
      }
    ],
    'react/jsx-indent-props': [2, 4], //验证JSX中的props缩进
    'react/jsx-key': 2, //在数组或迭代器中验证JSX具有key属性
    'react/jsx-no-bind': 0, //JSX中不允许使用箭头函数和bind
    'react/jsx-no-duplicate-props': 2, //防止在JSX中重复的props
    'react/jsx-no-literals': 0, //防止使用未包装的JSX字符串
    'react/jsx-no-undef': 1, //在JSX中禁止未声明的变量
    'react/jsx-pascal-case': 0, //为用户定义的JSX组件强制使用PascalCase
    'react/jsx-uses-react': 1, //防止反应被错误地标记为未使用
    'react/jsx-uses-vars': 2, //防止在JSX中使用的变量被错误地标记为未使用
    'react/no-danger': 0, //防止使用危险的JSX属性
    'react/no-did-mount-set-state': 0, //防止在componentDidMount中使用setState
    'react/no-did-update-set-state': 1, //防止在componentDidUpdate中使用setState
    'react/no-direct-mutation-state': 2, //防止this.state的直接变异
    'react/no-multi-comp': 1, //防止每个文件有多个组件定义
    'react/no-set-state': 0, //防止使用setState
    'react/no-unknown-property': 2, //防止使用未知的DOM属性
    'react/prefer-es6-class': 2, //为React组件强制执行ES5或ES6类
    'react/prop-types': 0, //防止在React组件定义中丢失props验证
    'react/react-in-jsx-scope': 2, //使用JSX时防止丢失React
    'react/self-closing-comp': 0, //防止没有children的组件的额外结束标签
    'react/sort-comp': 1, //强制组件方法顺序
    'no-extra-boolean-cast': 0, //禁止不必要的bool转换
    'react/no-array-index-key': 0, //防止在数组中遍历中使用数组key做索引
    'react/no-deprecated': 1, //不使用弃用的方法
    'react/jsx-equals-spacing': 2, //在JSX属性中强制或禁止等号周围的空格
    'no-unreachable': 1, //不能有无法执行的代码
    'comma-dangle': 2, // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ], // 控制逗号前后的空格
    'no-mixed-spaces-and-tabs': 0, //禁止混用tab和空格
    'prefer-arrow-callback': 0, //比较喜欢箭头回调

    //////////////
    // ES6.相关 //
    //////////////
    'arrow-body-style': 2, // 要求箭头函数体使用大括号
    'arrow-parens': 2, // 要求箭头函数的参数使用圆括号
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'constructor-super': 0, // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'no-const-assign': 2, // 禁止修改 const 声明的变量
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-var': 0, // 要求使用 let 或 const 而不是 var
    'object-shorthand': 0, // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-template': 0 // 要求使用模板字面量而非字符串连接
  },
  settings: {
    'import/ignore': ['node_modules']
  }
};
