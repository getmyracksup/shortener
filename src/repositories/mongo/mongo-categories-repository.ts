import { Category } from "../../entities/category";
import { CategoriesRepository } from "../categories-repository";
import categoryModel from "./models/category-model";

export class MongoCategoriesRepository implements CategoriesRepository {
    async create(category: Category): Promise<void> {
        try {
            const categoryInDb = new categoryModel({name: category.name, color: category.color})
            await categoryInDb.save()
        } catch (err) {
            console.log(err)
        }
    }

    async getAll(): Promise<Category[] | undefined> {
        try {
            const categoriesList: Category[] = []
            for await (const category of categoryModel.find()) {
                categoriesList.push(new Category({name: category.name, color: category.color}))
            }
            console.log(categoriesList)
            return categoriesList

        } catch (err) {
            console.log(err)
        }
    }

    async update(id: string, name: string): Promise<void> {
        
    }

    async delete(id: string): Promise<void> {
        try {
            await categoryModel.findByIdAndDelete({_id: id}).exec()
        } catch (err) {
            console.log(err)
        }
    }

    //@ts-ignore
    async findById(id: string): Promise<Category | null> {
        
    }
}