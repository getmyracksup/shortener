import { Shortened } from "../../entities/shortened";
import { ShortenedsRepository } from "../shorteneds-repository";
import shortenedModel from "./models/shortened-model";

export class MongoShortenedsRepository implements ShortenedsRepository {
    async create(shortened: Shortened): Promise<void> {
        try {
            const shortenedInDb = new shortenedModel({title: shortened.title, creator: shortened.creator, slug: shortened.slug, original_url: shortened.originalUrl, visits: shortened.visits, category_id: shortened.categoryId, created_at: shortened.createdAt})

            await shortenedInDb.save()
        } catch (err) {
            console.log(err)
        }
    }

    async getAll(): Promise<Shortened[] | undefined> {
        try {
            const shortenedsList: Shortened[] = []
            for await (const shortened of shortenedModel.find()) {
                shortenedsList.push(new Shortened({title: shortened.title, slug: shortened.slug, creator: shortened.creator, original_url: shortened.original_url, visits: shortened.visits, created_at: shortened.created_at, category_id: shortened.category_id}))
            }
            console.log(shortenedsList)
            return shortenedsList

        } catch (err) {
            console.log(err)
        }
    }

    async update(original_url: string, slug: string): Promise<void> {
        try {
            await shortenedModel.findOneAndUpdate({slug}, {original_url}).exec()
        } catch (err) {
            console.log(err)
        }
    }

    async delete(slug: string): Promise<void> {
        try {
            await shortenedModel.findOneAndDelete({slug}).exec()
        } catch (err) {
            console.log(err)
        }
    }

    async getOriginalURL(slug: string): Promise<string|undefined> {
        try {
            const shortened = await shortenedModel.findOne({slug}).exec()
            
            return (shortened) ? shortened.original_url : undefined

        } catch (err) {
            console.log(err)
        }

    }
}