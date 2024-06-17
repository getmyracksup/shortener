export function isValidIPV4(ip: string) {
    const parts = ip.split('.')

    if (parts.length !== 4) {
        return false
    }

    parts.forEach((part) => {
        const castedPart = Number(part)

        if (isNaN(castedPart) || castedPart < 0 || castedPart > 255 || part !== String(castedPart)) {
            return false
        }
    })


    return true;
}