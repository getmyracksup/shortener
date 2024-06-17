import { Visit } from "../../entities/visit";
import { VisitsRepository } from "../visits-repository";
import visitModel from "./models/visit-model";

export class MongoVisitsRepository implements VisitsRepository {
    async create(visit: Visit): Promise<void> {
        try {
            const visitInDb = new visitModel(visit.info)
            
            await visitInDb.save()
        } catch (err) {
            console.log(err)
        }
    }

    async getAll(): Promise<Visit[] | undefined> {
        try {
            const visitsList: Visit[] = []
            for await (const visit of visitModel.find()) {
                visitsList.push(new Visit({ip: visit.ip, slug: visit.slug, visited_at: visit.visited_at, country: visit.country, region: visit.region, city: visit.city}))
            }
            console.log(visitsList)
            return visitsList

        } catch (err) {
            console.log(err)
        }
    }
}