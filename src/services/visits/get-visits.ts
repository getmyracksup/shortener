import { VisitsRepository } from "../../repositories/visits-repository";

export class GetVisits {
    constructor(private visitsRepository: VisitsRepository) {}

    async getAll() {
        return this.visitsRepository.getAll()
    }
}