import { MemoryShortenedsRepository } from "../../repositories/memory/memory-shorteneds-repository"
import { CreateShortened, CreateShortenedRequest } from "./create-shortened"
import { RemoveShortened } from "./remove-shortened"

describe('remove shortened test suite', () => {
    const inMemRepo = new MemoryShortenedsRepository()
    const removeShortened = new RemoveShortened(inMemRepo)

    it('should remove a existent shortened', () => {
        const createShortened = new CreateShortened(inMemRepo)
        const shortenedExample: CreateShortenedRequest = {
            creator: "Kauan",
            original_url: "https://google.com",
            slug: "teste slug",
            title: "Link encurtado",
        }

        createShortened.create(shortenedExample).then((shortened) => {
            removeShortened.remove(shortened.slug).then(() => {
                inMemRepo.getAll().then((shorteneds) => expect(shorteneds?.length).toBe(0))
            })
        })
    })

    it('should throw if shortened with the slug doesnt exists', () => {
        expect(() => removeShortened.remove('slug')).rejects.toThrow()
    })

})