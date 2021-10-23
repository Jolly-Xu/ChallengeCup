import {createRouter,createWebHashHistory} from "vue-router"
import Home from "../views/Home.vue"
import TopNav from "../components/TopNav.vue"
import Login from "../views/Login.vue"
const router =  createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:"/Home"
        },
        {
            path:"/Home",
            components:{
                default:Home,
                Nav:TopNav
            } 
        },
        {
            path:"/Login",
            components:{
                default:Login,
                Nav:TopNav
            }
        }
    ]
    
})
export default router