import { CategoriesRepository } from "../../repositories/categories-repository";

export class RemoveCategory {

    constructor(private categoriesRepository: CategoriesRepository) {}

    async remove(id: string) {
        await this.categoriesRepository.delete(id)
    }
}