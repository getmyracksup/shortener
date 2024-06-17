import { DomainError } from "../domain_error";
import { Either, Left, left, right } from "../either";

function checkSlug(slug: string): Either<DomainError, String> {
    if (!slug) {
        return left({domain: "shortened", message: "slug vazio", code: 500})
    }

    return right(slug)
}