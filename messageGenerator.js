const adjective = [
    'pretty sick',
    'absolutely mega',
    'chossy',
    'pumpy',
    'crappy',
    'nails hard'
];
const type = [
    'techy face climb',
    'roof',
    'slab',
    'crimpy overhang',
    'diff',
    '9a',
    'V2'
];
const remark = [
    'It goes boys!',
    "We'll see.",
    "Today's the day!",
    'Too hard for me!',
    'My first of the grade!'
];
const vowels = ['a', 'e', 'i', 'o', 'u']

function randomComponent(array) {
    let len = array.length;
    let index = Math.floor(Math.random()*len);
    return array[index];
}

function composeMessage() {
    let firstPart = randomComponent(adjective);
    let secondPart = randomComponent(type);
    let thirdPart = randomComponent(remark);
    if (vowels.includes(firstPart[0])) {
        return `It's an ${firstPart} ${secondPart}. ${thirdPart}`;
    } else {
        return `It's a ${firstPart} ${secondPart}. ${thirdPart}`;
    }
}

console.log(composeMessage());