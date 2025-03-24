
import DemoPage from "./pageComponents/index"
import type {App} from "vue";
const comps = [DemoPage]
const install = (Vue:App) => {
    comps.map((component: any) => {
        Vue.component(component.__name as string, component);
    })
}


export default install