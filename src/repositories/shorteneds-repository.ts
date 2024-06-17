import { Shortened } from "../entities/shortened";

export interface ShortenedsRepository {
    create(shortened: Shortened): Promise<void>
    getAll(): Promise<Shortened[] | undefined>
    update(original_url: string, slug: string): Promise<void>
    delete(slug: string): Promise<void>
    getOriginalURL(slug: string): Promise<string|undefined>
}