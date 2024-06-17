import { Visit } from "../entities/visit";

export interface VisitsRepository {
    create(visit: Visit): Promise<void>,
    getAll(): Promise<Visit[] | undefined>
}