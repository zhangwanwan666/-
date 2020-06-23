import Vue from 'vue'
import {
  Button,
  Tabbar,
  TabItem,
  Lazyload,
  Checklist
} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Button.name, Button)
Vue.component(Checklist.name, Checklist);
