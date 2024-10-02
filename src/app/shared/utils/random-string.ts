export function randomString(type: 'text' | 'number', length: number): string {
    const textOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberOptions = "0123456789";
    const option = type === 'text' ? textOptions : numberOptions;

    let text = "";
    for (let i = 0; i < length; i++) {
        text += option.charAt(Math.floor(Math.random() * option.length));
    }

    return text;
}