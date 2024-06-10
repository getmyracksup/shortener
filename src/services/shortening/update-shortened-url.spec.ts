import { MemoryShortenedsRepository } from "../../repositories/memory/memory-shorteneds-repository"
import { slugify } from "../../utils/slugify"
import { CreateShortened, CreateShortenedRequest } from "./create-shortened"
import { UpdateShortenedURL } from "./update-shortened-url"

describe('update original url test suite', () => {
    const inMemRepo = new MemoryShortenedsRepository()
    const updateURL = new UpdateShortenedURL(inMemRepo)

    it('should update the url of a existent shortened link', () => {
        const createShortened = new CreateShortened(inMemRepo)
        const exampleShortened: CreateShortenedRequest = {
            creator: "Kauan",
            original_url: "https://google.com.br",
            slug: "teste slug",
            title: "Link encurtado"
        }

        createShortened.create(exampleShortened).then((shortened) => {
            updateURL.update('https://duckduckgo.com', shortened.slug).then(() => {
                const expected = shortened;
                expected.originalUrl = 'https://duckduckgo.com'
                inMemRepo.getAll().then((shorteneds) => expect(shorteneds).toEqual(expect.arrayContaining([
                    expect.objectContaining(expected)
                ])))
            })
        })
    })

    it('should throw if shortened with the slug doesnt exists', () => {
        expect(() => updateURL.update('https://google.com.br', 'slug')).rejects.toThrow()
    })
})