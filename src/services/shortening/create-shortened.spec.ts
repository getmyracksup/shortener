
import { MemoryShortenedsRepository } from "../../repositories/memory/memory-shorteneds-repository"
import { CreateShortened, CreateShortenedRequest } from "./create-shortened"

describe('create shortened link suite', () => {
    const inMemRepo = new MemoryShortenedsRepository()
    const createShortened = new CreateShortened(inMemRepo)

    const testShortened: CreateShortenedRequest = {
        creator: "Kauan",
        original_url: "https://google.com",
        slug: "teste slug",
        title: "Link encurtado"
    }

    it('should create a shortened link', () => {
        createShortened.create(testShortened).then((shortened) => expect(shortened.creator).toEqual("Kauan"))
    })

    it('should not create a shortened link with a already existent slug', () => {
        expect(() => createShortened.create(testShortened)).rejects.toThrow()
    })
})