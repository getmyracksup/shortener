export async function getLocation(ip: string) {
    const response = await (await fetch(`http://ip-api.com/json/${ip}`, {method: 'GET'})).json()

    return (response.country) ? response.country : undefined
}