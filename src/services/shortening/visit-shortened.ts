import { ShortenedsRepository } from "../../repositories/shorteneds-repository";

export class VisitShortened {
    constructor(private shortenedsRepository: ShortenedsRepository) {}

    async visit(slug: string) {
        return await this.shortenedsRepository.getOriginalURL(slug)
    }
}