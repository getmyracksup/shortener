import { ShortenedsRepository } from "../../repositories/shorteneds-repository";

export class GetShortened {
    constructor(private shortenedsRepository: ShortenedsRepository) {}

    async get() {
        return this.shortenedsRepository.getAll()
    }
}