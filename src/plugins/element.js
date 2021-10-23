import {ElCarousel} from 'element-plus'
import 'element-plus/dist/index.css'
export default (app) => {
    app.use(ElCarousel, { size: 'small', zIndex: 3000 })
}