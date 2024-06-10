import { validateURL } from "../utils/validate-url"

export interface ShortenedProps {
    slug: string,
    creator: string,
    original_url: string,
    visits: number,
    title: string,
    category_id?: string | null,
    created_at: Date
}


export class Shortened {
    private props: ShortenedProps

    constructor(props: ShortenedProps) {

        if (!props.slug) {
            throw new Error('O slug nao pode ser vazio!')
        }

        if (!props.creator) {
            throw new Error('O criador nao pode ser vazio!')
        }

        if (!props.title) {
            throw new Error('O titulo nao pode ser vazio!')
        }

        if (!validateURL(props.original_url)) {
            throw new Error('URL invalida!')
        }

        if (props.visits != 0) {
            throw new Error('Todo link encurtado deve comecar com o numero de visitas nulo!')
        }

        this.props = props
    }

    get slug() {
        return this.props.slug
    }

    get creator() {
        return this.props.creator
    }

    get originalUrl() {
        return this.props.original_url
    }

    set originalUrl(original_url: string) {
        this.props.original_url = original_url
    }

    get visits() {
        return this.props.visits
    }

    get title() {
        return this.props.title
    }

    get categoryId() {
        return this.props.category_id
    }

    get createdAt() {
        return this.props.created_at
    }

    get info() {
        return this.props
    }
}