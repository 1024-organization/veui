import StCol from './src/col'

StCol.install = function(Vue){
    Vue.component(StCol.name, StCol);
}

export default StCol;