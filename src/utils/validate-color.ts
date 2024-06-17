export function isValidHexColor(color: string) {
    const pattern = /^#[0-9A-F]{6}$/i
    
    return pattern.test(color)
}