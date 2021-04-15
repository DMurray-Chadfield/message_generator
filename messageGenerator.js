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

function randomComponent(array) {
    let len = array.length;
    let index = Math.floor(Math.random()*len);
    return array[index];
}