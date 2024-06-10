import { ShortenedsRepository } from "../../repositories/shorteneds-repository";

export type UpdateShortenedURLRequest = {
    original_url: string
}

export class UpdateShortenedURL {
    constructor(private shortenedsRepository: ShortenedsRepository) {}

    async update(original_url: string, slug: string) {
        const shorteneds = await this.shortenedsRepository.getAll()

        if (!shorteneds) throw new Error('Nenhum link encurtado encontrado')

        if (!shorteneds.find((shortened) => shortened.slug == slug)) throw new Error('Nenhum link encurtado com slug dado.')

        this.shortenedsRepository.update(original_url, slug)
    }
}