import { isValidIPV4 } from "../utils/validate-ip";

export interface VisitProps {
    country?: string,
    region?: string,
    city?: string,
    ip: string,
    slug: string,
    visited_at: Date
}

export class Visit {
    private props: VisitProps

    constructor(props: VisitProps) {

        if (!isValidIPV4(props.ip)) {
            throw new Error("O ip e invalido!")
        }

        if (!props.slug) {
            throw new Error("O slug nao pode ser vazio!")
        }

        this.props = props
    } 

    get ip() {
        return this.props.ip;
    }

    get slug() {
        return this.props.slug;
    }

    get country() {
        return this.props.country
    }

    get visitedAt() {
        return this.props.visited_at
    }
}