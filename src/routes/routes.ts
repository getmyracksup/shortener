import { Router } from "express";

abstract class Routes {
    router = Router()

    constructor() {
        this.routes()
    }

    abstract routes(): void
}

export default Routes;