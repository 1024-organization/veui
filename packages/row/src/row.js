export default {
    name: 'StRow', //组件名称，驼峰命名可以使实际使用组件时短横线连接法<el-row>和驼峰法<ElRow>都可以使用
    componentName: 'StRow', //自定义属性(该属性不是component必需属性)，挺重要的，用于后面<el-col>不断向父级查找该组件
    props: {
        tag: { //组件渲染成html的实际标签，默认时div
            type: String,
            default: 'div'
        },
        gutter: Number, //该组件的里面的<el-col>组件的间隔

        /* 组件是否是flex布局，将 type 属性赋值为 'flex'，可以启用 flex 布局，
        *  并可通过 justify 属性来指定 start, center, end, space-between, space-around*/
        type: String,
        justify: {
            type: String,
            default: 'start'
        },
        align: {
            type: String,
            default: 'top'
        }
    },
    computed: {
        //row的左右margin，用于抵消col的padding，后面详细解释，注意是计算属性，这里通过gutter计算出实际margin
        style() {
            const ret = {};
            if( this.gutter){
                ret.marginLeft = `-${this.gutter / 2}px`;
                ret.marginRight = ret.marginLeft;
            }
            return ret;
        }
    },
    render(h) {
        return h(this.tag, {
            class: [
                'st-row',
                this.justify !== 'start' ? `is-justify-${this.justify}` : '',
                this.align !=='top' ? `is-align-${this.align}` : '',
                { 'st-row--flex' : this.type === 'flex' }
            ],
            style: this.style
        },this.$slots.default);
    }
}