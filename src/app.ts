import express = require("express")

import ShorteningRoutes from "./routes/shortening-routes"
import CategoryRoutes from "./routes/category-routes"


class Application {
    public express: express.Application

    constructor() {
        this.express = express()
        this.express.use(express.json())

        this.initRoutes()
    }

    initRoutes() {
        this.express.use(ShorteningRoutes.router)
        this.express.use(CategoryRoutes.router)
    }

    listen(port: number) {
        this.express.listen(port, () => {
            console.log('Link shortener')
        })
    }
}

export default new Application()