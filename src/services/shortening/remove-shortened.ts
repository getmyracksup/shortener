import { ShortenedsRepository } from "../../repositories/shorteneds-repository";

export class RemoveShortened {
    constructor(private shortenedsRepository: ShortenedsRepository) {}

    async remove(slug: string) {

        const shorteneds = await this.shortenedsRepository.getAll()

        if (!shorteneds) throw new Error('Nenhum link encurtado encontrado')

        if (!shorteneds.find((shortened) => shortened.slug == slug)) throw new Error('Nenhum link encurtado com slug dado.')

        await this.shortenedsRepository.delete(slug)
    }
}