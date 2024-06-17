import { Category } from "./category"

test('create a category', () => {
    const category = new Category({
        name: "Qualquer",
        color: "#000000"
    })
    
    
    expect(category).toBeInstanceOf(Category)

    expect(category.name).toBe('Qualquer')
})

test('cannot create a category if name is empty', () => {
    expect(() => {
        return new Category({
            name: "",
            color: "#000000"
        })
    }).toThrow()
})

test('cannot create a category if color invalid', () => {

    expect(() => {
        return new Category({
            name: "Qualquer",
            color: "adwa"
        })
    }).toThrow()
})