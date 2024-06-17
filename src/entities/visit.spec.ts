import { Visit } from "./visit"

test('create a visit', () => {
    const visit = new Visit({
        ip: "192.168.0.1",
        slug: "link-google",
        visited_at: new Date(),
        country: "BR",
        region: "SP",
        city: "Sao Paulo"
    })

    expect(visit).toBeInstanceOf(Visit)

    expect(visit.country).toBe('BR')
})


test('cannot create a visit with an invalid IP', () => {
    expect(() => {
        return new Visit({
            ip: "192.168.0",
            slug: "link-google",
            visited_at: new Date(),
            country: "BR",
            region: "SP",
            city: "Sao Paulo"
        })
    }).toThrow()
})