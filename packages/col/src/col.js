export default {
    name: 'StCol',
    props: {
        span: { //组件占父容器的列数，总共24列，如果设置为0则渲染出来display为none
            type: Number,
            default: 24
        },
        tag: {
            type: String,
            default: 'div'
        },
        offset: Number, //通过制定 col 组件的 offset 属性指定分栏向右偏移的栏数
        pull: Number,//栅格向右移动格数
        push: Number,//栅格向左移动格数
        xs: [Number, Object],//以下为几个皆是响应式的处理
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object]
    },
    computed: {
        //获取el-row的gutter值
        gutter() {
            let parent = this.$parent;
            while( parent && parent.$options.componentName !== 'StRow' ){
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        }
    },
    render(h){
        let classList = [];
        let style = {};
        if(this.gutter){//通过gutter计算在的左右2个oadding，达到分隔col的目的
            style.paddingLeft = this.gutter/2 + 'px';
            style.paddingRight = style.paddingLeft;
        }
        //处理布局相关
        ['span', 'offset', 'pull', 'push'].forEach(prop => {
            if(this[prop] || this[prop] === 0){
                classList.push(
                    prop !== 'span'
                        ? `st-col-${prop}-${this[prop]}`
                        : `st-col-${this[prop]}`
                )
            }
        });
        //处理屏幕响应式相关
        ['xs', 'sm', 'md', 'lg','xl'].forEach(size => {
            if(typeof this[size] === 'number') {
                classList.push(`st-col-${size}-${this[size]}`);
            }
            else if(typeof this[size] === 'object'){
                let props = this[size];
                Object.keys(props).forEach(prop => {
                    classList.push(
                        prop !== 'span'
                            ? `st-col-${size}-${prop}-${props[prop]}`
                            : `st-col-${size}-${props[prop]}`
                    )
                })
            }
        })
        return h(this.tag, {
            class: ['st-col', classList],
            style
        }, this.$slots.default);
    }
}