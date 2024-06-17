import { CategoriesRepository } from "../../repositories/categories-repository";

export class GetCategories {
    constructor(private categoriesRepository: CategoriesRepository) {}

    async get() {
        return this.categoriesRepository.getAll()
    }
}