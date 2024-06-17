import { Shortened } from "./shortened"

test('create a shortened', () => {
    const shortened = new Shortened({
        title: "Link encurtado",
        creator: "Kauan",
        original_url: "https://google.com",
        visits: 0,
        slug: "link-google",
        created_at: new Date()
    })

    expect(shortened).toBeInstanceOf(Shortened)

    expect(shortened.creator).toBe('Kauan')
})


test('cannot create a shortened with an invalid url', () => {
    expect(() => {
        return new Shortened({
            title: "Link encurtado",
            creator: "Kauan",
            original_url: "https:/google.com",
            visits: 0,
            slug: "link-google",
            created_at: new Date()
        })
    }).toThrow()
})

test('cannot create a shortened with an empty slug', () => {
    expect(() => {
        return new Shortened({
            title: "Link encurtado",
            creator: "Kauan",
            original_url: "https:/google.com",
            visits: 0,
            slug: " ",
            created_at: new Date()
        })
    }).toThrow()
})