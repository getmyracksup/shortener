import Routes from "./routes";
import ShortenedController from "../controllers/shortened-controller";

class ShorteningRoutes extends Routes {
    constructor() {
        super()
    }

    routes() {
        this.router.get('/api/shortened', ShortenedController.index)
        this.router.post('/api/shortened', ShortenedController.create)
        this.router.patch('/api/shortened/:slug', ShortenedController.update)
        this.router.delete('/api/shortened/:slug', ShortenedController.remove)
        
        //this.router.get('/:slug', )
    }
}

export default new ShorteningRoutes()