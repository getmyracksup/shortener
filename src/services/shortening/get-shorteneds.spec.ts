import { Shortened } from "../../entities/shortened"
import { MemoryShortenedsRepository } from "../../repositories/memory/memory-shorteneds-repository"
import { CreateShortened, CreateShortenedRequest } from "./create-shortened"
import { GetShortened } from "./get-shorteneds"

describe('get shortened links suite', () => {
    const inMemRepo = new MemoryShortenedsRepository()
    const getShorteneds = new GetShortened(inMemRepo)

    it('should get a empty list of shortened links', () => {
        getShorteneds.get().then((shorteneds) => expect(shorteneds).toEqual([]))
    })

    it('should get a list of shortened links', () => {
        const createShortened = new CreateShortened(inMemRepo)
        const exampleShortenedRequest: CreateShortenedRequest = {
            creator: "Kauan", 
            original_url: "https://google.com.br", 
            slug: "teste slug", 
            title: "Link encurtado"
        }

        createShortened.create(exampleShortenedRequest).then(() => {
            inMemRepo.getAll().then((shorteneds) => expect(shorteneds).toHaveLength(1))
        })
    })
})