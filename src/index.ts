//---------------- Environment  (Node.js or browser) handler ------------------------------------
let createCanvas: any;
let CanvasRenderingContext2D: any;

const isNode = () => {
    console.log("env");
    return (typeof process !== 'undefined') && (process.release?.name === 'node');
};

if (isNode()) {

    // We are in a Node.js environment
    const { createCanvas: nodeCreateCanvas, CanvasRenderingContext2D: nodeCanvasRenderingContext2D } = require('canvas');
    createCanvas = nodeCreateCanvas;
    CanvasRenderingContext2D = nodeCanvasRenderingContext2D;
} else {
    // We are in a browser environment
    createCanvas = (width: number, height: number) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    };
    CanvasRenderingContext2D = window.CanvasRenderingContext2D;
}

//-------------------------------------------------------------------------

const HEXA_SIZE = 6;
const BASE = 16;

const DEFAULT_FONT_SETTINGS = {
    style: 'normal',
    variant: 'normal',
    weight: 'normal',
    family: 'Arial'
}

export type SettingsType = {
    style?: string;
    variant?: string;
    weight?: string;
    family?: string;
    lettersColor?: string;
    backgroundColor?: string;
};

export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color: string = '#';
    for (let i: number = 0; i < HEXA_SIZE; i++) {
        color += letters[Math.floor(Math.random() * BASE)];
    }
    return color;
};

function getSettings(settings: SettingsType | null | undefined,
                     size : number ):
    {lettersSize: number, lettersColor: string, backgroundColor: string, style: string, variant: string, weight: string, family: string}
{
    const lettersColor: string = (settings && settings.lettersColor) ? settings.lettersColor : getRandomColor();
    return {
        lettersSize:  (size / 2),
        lettersColor: lettersColor,
        backgroundColor: (settings && settings.backgroundColor) ? settings.backgroundColor : `${lettersColor}50`,
        style: (settings && settings.style) ? settings.style : DEFAULT_FONT_SETTINGS.style,
        variant: (settings && settings.variant) ? settings.variant : DEFAULT_FONT_SETTINGS.variant,
        weight: (settings && settings.weight) ? settings.weight : DEFAULT_FONT_SETTINGS.weight,
        family: (settings && settings.family) ? settings.family : DEFAULT_FONT_SETTINGS.family
    }
}

const generateLetterImage = (letters: string, size: number, settings: SettingsType | null | undefined = {} ) => {

    const {lettersSize, lettersColor, backgroundColor, style, variant, weight, family} = getSettings(settings, size);

    // const canvas = document.createElement('canvas');
    const canvas = createCanvas(size, size);
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

    if (!context) {
        return null;
    }
    // canvas.width = canvas.height = size;

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, size, size);

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, size, size);

    context.fillStyle = lettersColor;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.font = `${style} ${variant} ${weight} ${lettersSize}px ${family}`;
    context.fillText(letters, lettersSize, lettersSize);

    return canvas.toDataURL();
};

export default generateLetterImage;