import CategoriesController from "../controllers/categories-controller";
import Routes from "./routes";


class CategoryRoutes extends Routes {
    constructor() {
        super()
    }

    routes() {
        this.router.get('/api/categories', CategoriesController.index)
        this.router.post('/api/categories', CategoriesController.create)
        this.router.delete('/api/categories/:id', CategoriesController.remove)
    }
}

export default new CategoryRoutes()