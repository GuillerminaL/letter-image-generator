import generateLetterImage from "../dist/esm/index.js";

const uppercase = generateLetterImage('U', 100);
const lowercase = generateLetterImage('l', 100);
const multiple = generateLetterImage('ULc', 100);

// Settings as a variable
const allCustomSettings = {
    style:'italic',
    variant:'small-caps',
    weight:'bold',
    family:'Georgia',
    lettersColor: '#ffffff',
    backgroundColor: '#1eb3a4'
};
const custom = generateLetterImage('AC', 100, allCustomSettings);

//Inline settings
const customColors = generateLetterImage('sc', 100, {
    lettersColor: '#c9142c', backgroundColor: '#1eb3a4'
});

const customFont = generateLetterImage('CU', 100, {
    style: 'oblique',
    variant: 'small-caps',
    weight: '700',
    family: 'Times New Roman'
});

//Render
document.querySelector('#uppercase').src = uppercase;
document.querySelector('#lowercase').src = lowercase;
document.querySelector('#multiple').src = multiple;
document.querySelector('#custom').src = custom;
document.querySelector('#customColors').src = customColors;
document.querySelector('#customFont').src = customFont;
document.querySelector('#logo').src =
    generateLetterImage(
        'lig',
        60,
        {style: 'italic', family: 'Trebuchet MS'}
    );
