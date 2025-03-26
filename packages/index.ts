import DemoPage from "./DemoPage/index"
import type {App} from "vue";
export { DemoPage };
const comps = [DemoPage]
const install = (Vue:App) => {
    comps.map((component: any) => {
        Vue.component(component.name as string, component);
    })
}
export default {install}