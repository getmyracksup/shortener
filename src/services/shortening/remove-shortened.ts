import { ShortenedsRepository } from "../../repositories/shorteneds-repository";

export class RemoveShortened {
    constructor(private shortenedsRepository: ShortenedsRepository) {}

    async remove(slug: string) {
        this.shortenedsRepository.delete(slug)
    }
}