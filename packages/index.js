import Button from './button'
import Row from './row'
import Col from './col'

const components = [
  Button, Row, Col
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Col,
  Row
}
