import { Category } from "../../entities/category"
import { MemoryCategoriesRepository } from "../../repositories/memory/memory-categories-repository"
import { CreateCategory } from "./create-category"
import { GetCategories } from "./get-categories"

describe('get categories suite', () => {
    const inMemRepository = new MemoryCategoriesRepository()
    const getCategories = new GetCategories(inMemRepository)

    it('should get categories empty', () => {
        inMemRepository.getAll().then((categories) => expect(categories).toEqual([]))
    })

    it('should get a list of categories', () => {
        const createCategory = new CreateCategory(inMemRepository)
        const testCategory = {name: "Teste", color: "#FFFFFF"}

        createCategory.create({name: "Teste", color: "#FFFFFF"}).then((category) => {
            inMemRepository.getAll().then((categories) => expect(categories).toEqual([new Category(testCategory)]))
        })
    })
})