import { Category } from "../../entities/category"
import { MemoryCategoriesRepository } from "../../repositories/memory/memory-categories-repository"
import { CreateCategory } from "./create-category"

describe('create category suite', () => {
    const inMemRepo = new MemoryCategoriesRepository()
    const createCategory = new CreateCategory(inMemRepo)

    const testCategory = {
        name: "Teste",
        color: "#FFFFFF"
    }

    it('should create a category', () => {
        //createCategory.create(testCategory).then((category) => expect(category).toBeInstanceOf(Category))
        createCategory.create(testCategory).then((category) => expect(Object(category)).toEqual({props: testCategory}))
    })

    it('should not create a category that already exists', () => {
        expect(() => createCategory.create(testCategory)).rejects.toThrow()
    })
})