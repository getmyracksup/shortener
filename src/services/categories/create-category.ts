import { Category } from "../../entities/category"
import { CategoriesRepository } from "../../repositories/categories-repository"
import { randomUUID } from 'node:crypto'

export type CreateCategoryRequest = {
    name: string,
    color: string    
}


export class CreateCategory {
    constructor(private categoriesRepository: CategoriesRepository) {}

    async create({name, color}: CreateCategoryRequest) {
        const category = new Category({ name, color })

        const categories = await this.categoriesRepository.getAll();

        if (categories) {
            categories.forEach((cat) => {
                if (cat.name == name) {
                    throw new Error("Categoria ja existente!")
                }
            })
        }

        this.categoriesRepository.create(category)

        return category
    }
}