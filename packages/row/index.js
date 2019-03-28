import Row from './src/row'

Row.install = function(Vue) {
    //全局注册该组件
    Vue.component(Row.name,Row);
}

export default Row;