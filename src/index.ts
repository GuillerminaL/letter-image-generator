const HEXA_SIZE = 6;
const BASE = 16;

export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < HEXA_SIZE; i++) {
        color += letters[Math.floor(Math.random() * BASE)];
    }
    return color;
};

const generateLetterImage = (letters: string, size: number, fontStyle = 'normal', fontVariant = 'normal', fontWeight = 'normal', fontFamily = 'Arial') => {
    const color = getRandomColor();
    const canvas = document.createElement('canvas');
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!context) {
        return null;
    }
    canvas.width = canvas.height = size;

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, size, size);

    context.fillStyle = `${color}50`;
    context.fillRect(0, 0, size, size);

    context.fillStyle = color;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.font = `${fontStyle} ${fontVariant} ${fontWeight} ${size / 2}px ${fontFamily}`;
    context.fillText(letters, size / 2, size / 2);

    return canvas.toDataURL();
};

export default generateLetterImage;