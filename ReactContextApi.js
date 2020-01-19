// 创建供全局使用的context store.js
import React from 'react'
const context = React.createContext()
export const Provider = context.Provider
export const Consumer = context.Consumer

// 顶层组件 grandParent.js
import { Provider } from './store.js'
const store = {
  text: '新版context api示例'
}
class GrandParent extends Component{
    render(){
        return (
            <Provider value = {store}>
                <MsgContainer />
            </Provider>
        )
    }
}

// 中间层组件 parent.js
class Parent extends Component{
    render(){
        return <Child />
    }
}

// 需要获取顶层组件的text值的底层组件 child.js
import { Consumer } from './store.js'
class Child extends Component{
    render(){
        return (
            <Consumer>
              {
                context => {
                  return context.text
                }
              }
            </Consumer>
        )
    }
}