import { Category } from "../../entities/category";
import { CategoriesRepository } from "../categories-repository";

type MemoryCategory = Category & {
    id: string
}

class MemoryCategoriesRepository implements CategoriesRepository {

    private categories: MemoryCategory[] = []

    async create(category: MemoryCategory): Promise<void> {
        this.categories.push(category)
    }

    async getAll(): Promise<MemoryCategory[]> {
        return this.categories
    }

    async update(id: string, name: string): Promise<void> {
        const index = this.categories.findIndex((category) => {
            if (category.id == id) return true
        })

        if (index == -1) throw new Error("Registro de categoria nao encontrado!")

        this.categories[index].name = name
    }

    async delete(id: string): Promise<void> {
        const index = this.categories.findIndex((category) => {
            if (category.id == id) return true
        })

        if (index == -1) throw new Error("Registro de categoria nao encontrado!")

        this.categories.splice(index, 1)
    }

    async findById(id: string): Promise<MemoryCategory | null> {
        let response: MemoryCategory | null = null

        const index = this.categories.findIndex((category) => {
            if (category.id == id) return true
        })

        if (index !== -1) {
            response = this.categories[index]
        }

        return response
    }
}