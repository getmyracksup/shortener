import { Visit } from "../../entities/visit";
import { VisitsRepository } from "../visits-repository";

export class MemoryVisitsRepository implements VisitsRepository {
    private visits: Visit[] = []

    async create(visit: Visit): Promise<void> {
        this.visits.push(visit)
    }

    async getAll(): Promise<Visit[] | undefined> {
        return this.visits
    }
}