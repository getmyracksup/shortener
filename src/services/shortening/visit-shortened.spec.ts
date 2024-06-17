import { MemoryShortenedsRepository } from "../../repositories/memory/memory-shorteneds-repository"
import { MemoryVisitsRepository } from "../../repositories/memory/memory-visits-repository"
import { CreateShortened, CreateShortenedRequest } from "./create-shortened"
import { VisitShortened, VisitShortenedProps } from "./visit-shortened"

describe('visit shortened test suite', () => {
    const inMemRepo = new MemoryShortenedsRepository()
    const visitLink = new VisitShortened(inMemRepo, new MemoryVisitsRepository())

    it('should visit a existent link', () => {
        const createShortened = new CreateShortened(inMemRepo)
        const exampleShortened: CreateShortenedRequest = {
            creator: "Kauan",
            original_url: "https://google.com.br",
            slug: "teste slug",
            title: "Link encurtado"
        }

        const exampleVisit: VisitShortenedProps = {
            ip: "192.168.1.0",
            slug: 'teste-slug',
            country: 'BR',
            city: 'Sao Paulo',
            region: 'SP',
            visited_at: new Date()
        }

        createShortened.create(exampleShortened).then((shortened) => {
            visitLink.visit(exampleVisit).then((link) => {
                expect(link).toEqual("https://google.com.br")
            })
        })
    })

    it('should throw if the link doesnt exists', () => {
        const exampleVisit: VisitShortenedProps = {
            ip: "192.168.1.0",
            slug: 'slug',
            country: 'BR',
            city: 'Sao Paulo',
            region: 'SP',
            visited_at: new Date()
        }
        expect(() => visitLink.visit(exampleVisit)).rejects.toThrow()
    })
})