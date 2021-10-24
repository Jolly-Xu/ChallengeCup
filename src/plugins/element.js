import {ElCarousel, ElCarouselItem} from 'element-plus'
import 'element-plus/dist/index.css'
export default (app) => {
    app.use(ElCarousel, { size: 'small', zIndex: 3000 })
    app.use(ElCarouselItem)
}