import { Shortened } from "../../entities/shortened"
import { ShortenedsRepository } from "../../repositories/shorteneds-repository"
import { slugify } from "../../utils/slugify"

export type CreateShortenedRequest = {
    title: string,
    slug: string,
    original_url: string,
    category_id?: string,
    creator: string
}


export class CreateShortened {
    constructor(private shortenedsRepository: ShortenedsRepository) {}

    async create({title, slug, original_url, creator, category_id}: CreateShortenedRequest) {
        const shortened = new Shortened({title, slug: slugify(slug), original_url, creator, category_id, visits: 0, created_at: new Date()})

        await this.shortenedsRepository.create(shortened)
    }
}