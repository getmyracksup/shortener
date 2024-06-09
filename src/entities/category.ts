import { isValidHexColor } from "../utils/validate-color"

export interface CategoryProps {
    name: string,
    color: string
}

export class Category {
    private props: CategoryProps

    constructor(props: CategoryProps) {

        if (!props.name) {
            throw new Error("O nome nao pode ser vazio!")
        }

        if (!isValidHexColor(props.color)) {
            throw new Error("Cor invalida! Utilize cores do tipo #000000")
        }

        this.props = props
    }

    get name() {
        return this.props.name
    }
    
    get info() {
        return this.props
    }

    set name(name: string) {
        this.name = name
    }

    get color() {
        return this.props.color
    }
}