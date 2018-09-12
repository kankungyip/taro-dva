Taro-dva
===

Taro 可以使用 Redux 数据流方案，我习惯了使用 dva，基于 dva-core 写了一个 taro-dva 库，方便在 Taro 中使用。

## 安装

可选安装 `dva-immer` 和 `dva-loading`。

```bash
$ yarn add taro-dva dva-immer dva-loading
```

## 使用

```jsx app.js
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import { createStore } from 'taro-dva'

const store = createStore({
  useImmer: true, // 使用 dva-immer

  useLoading: {   // 使用 dva-loading
    effect: true,
  },

  models: [
    require('./models/g').default,
  ],
})

class App extends Component {
  config = {
    pages: [
      'pages/Index/index',
    ],
    window: {
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  }

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

```
