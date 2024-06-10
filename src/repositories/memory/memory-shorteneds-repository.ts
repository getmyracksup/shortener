import { Shortened } from "../../entities/shortened";
import { ShortenedsRepository } from "../shorteneds-repository";

export class MemoryShortenedsRepository implements ShortenedsRepository {
    private shorteneds: Shortened[] = []

    async create(shortened: Shortened): Promise<void> {
        this.shorteneds.push(shortened)
    }

    async getOriginalURL(slug: string): Promise<string | undefined> {
        return this.shorteneds.find((shortened) => shortened.slug == slug)?.originalUrl
    }

    async getAll(): Promise<Shortened[] | undefined> {
        return this.shorteneds
    }

    async update(original_url: string, slug: string): Promise<void> {
        const index = this.shorteneds.findIndex((shortened) => shortened.slug == slug)

        if (index !== -1) this.shorteneds[index].originalUrl = original_url

        throw new Error("URL nao encontrada!")
    }

    async delete(slug: string): Promise<void> {
        const newShortenedsList: Shortened[] = []
        this.shorteneds.forEach((shortened) => {
            if (shortened.slug !== slug) newShortenedsList.push(shortened)
        })

        this.shorteneds = newShortenedsList
    }
}