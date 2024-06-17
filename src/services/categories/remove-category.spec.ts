import { MemoryCategoriesRepository } from "../../repositories/memory/memory-categories-repository"
import { CreateCategory } from "./create-category"
import { RemoveCategory } from "./remove-category"

describe('remove category suite', () => {
    const inMemRepository = new MemoryCategoriesRepository()
    const removeCategory = new RemoveCategory(inMemRepository)
    const createCategory = new CreateCategory(inMemRepository)


    it('should remove a created category', () => {
        const testCategory = {name: "Teste", color: "#000000"}
        createCategory.create(testCategory).then((category) => {
            inMemRepository.getAll().then((categories) => {
                //@ts-ignore
                removeCategory.remove(categories.at(0).id).then(() => {
                    inMemRepository.getAll().then((removedList) => expect(removedList).toEqual([]))
                })
            })
        })
    })
})