import { Request, Response } from "express";
import { CreateCategory, CreateCategoryRequest } from "../services/categories/create-category";
import { MongoCategoriesRepository } from "../repositories/mongo/mongo-categories-repository";
import { GetCategories } from "../services/categories/get-categories";
import { RemoveCategory } from "../services/categories/remove-category";

class CategoryController {
    public async create(req: Request<{}, {}, CreateCategoryRequest, {}>, res: Response): Promise<Response> {
        try {
            await (new CreateCategory(new MongoCategoriesRepository()).create(req.body))
            return res.status(201).send()
        } catch (err) {
            return res.status(402).send({err: "Failed to fetch all resources"})
        }
    }

    public async index(req: Request, res: Response): Promise<Response> {
        try {
            const categories = await (new GetCategories(new MongoCategoriesRepository()).get())
            if (categories) {
                const infoCategories = categories.map((category) => {
                    return category.info
                })
                return res.status(200).send(infoCategories)
            }

            return res.status(200).send(categories)
        } catch (err) {
            return res.status(402).send({err})
        }
    }

    public async remove(req: Request<{id: string}, {}, {}, {}>, res: Response): Promise<Response> {
        try {
            await (new RemoveCategory(new MongoCategoriesRepository()).remove(req.params.id))

            return res.status(200).send()
        } catch (err) {
            return res.status(402).send({err})
        }
    }
}

export default new CategoryController()