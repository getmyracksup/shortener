import { Category } from "../entities/category";

export interface CategoriesRepository {
    create(category: Category): Promise<void>
    update(name: string, id: string): Promise<void>
    delete(id: string): Promise<void>
    getAll(): Promise<Category[] | undefined>
    findById(id: string): Promise<Category | null>
}