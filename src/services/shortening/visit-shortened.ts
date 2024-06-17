import { Visit, VisitProps } from "../../entities/visit";
import { ShortenedsRepository } from "../../repositories/shorteneds-repository";
import { VisitsRepository } from "../../repositories/visits-repository";

export type VisitShortenedProps = VisitProps

export class VisitShortened {
    constructor(private shortenedsRepository: ShortenedsRepository, private visitsRepository: VisitsRepository) {}

    async visit(visit_info: VisitShortenedProps) {
        const shorteneds = await this.shortenedsRepository.getAll()

        if (!shorteneds) throw new Error('Nenhum link encurtado encontrado')

        if (!shorteneds.find((shortened) => shortened.slug == visit_info.slug)) throw new Error('Nenhum link encurtado com slug dado.')
        
        await this.visitsRepository.create(new Visit(visit_info))

        return await this.shortenedsRepository.getOriginalURL(visit_info.slug)
    }
}