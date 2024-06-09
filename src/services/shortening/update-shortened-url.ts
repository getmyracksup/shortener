import { ShortenedsRepository } from "../../repositories/shorteneds-repository";

export type UpdateShortenedURLRequest = {
    original_url: string
}

export class UpdateShortenedURL {
    constructor(private shortenedsRepository: ShortenedsRepository) {}

    async update(original_url: string, slug: string) {
        this.shortenedsRepository.update(original_url, slug)
    }
}