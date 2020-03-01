import Vue from 'vue'
import ThMessage from "./message";
import ThDoctortitlebar from "./doctortitlebar";
import ThDialog from "./dialog";
const Components = {
  ThMessage,
  ThDoctortitlebar,
  ThDialog
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
