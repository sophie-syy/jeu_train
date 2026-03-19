const COULEUR_DEF = ['purple', 'green', 'yellow', 'orange', 'white', 'red', 
                     'blue', 'pink', 'blueviolet', 'maroon', 'cyan', 'bisque']

const COULEUR_RANDOM = COULEUR_DEF.sort(() => Math.random() - 0.5);

const HOUSE_L1_1 = [
    { id: COULEUR_RANDOM[0], x: 56, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[1], x: 38, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[2], x: 85, y: 62, side: 'right' },
    { id: COULEUR_RANDOM[3], x: 5, y: 62, side: 'left' }
];

const SWITCHES_L1_1 = [
    { id: 'sw1',  x: 57.5, y: 65, allowed: ['right', 'left'] },
    { id: 'sw2',  x: 39.5, y: 43, allowed: ['right', 'up'] },
    { id: 'sw3',  x: 57.5, y: 43, allowed: ['down', 'up'] }
];

const RAIL_L1_1 = [
    { id: 'v1', x: 10, y: 47, width: 52, height: 2 },
    { id: 'v2', x: 41, y: 10, width: 1.5, height: 35 },
    { id: 'v3', x: 59, y: 10, width: 1.5, height: 60 },
    { id: 'v4', x: 10, y: 68, width: 80, height: 2 }
];

const HOUSE_L1_2 = [
    { id: COULEUR_RANDOM[0], x: 5, y: 20, side: 'left' },
    { id: COULEUR_RANDOM[1], x: 28, y: 82, side: 'bottom' },
    { id: COULEUR_RANDOM[2], x: 86, y: 52, side: 'right' },
    { id: COULEUR_RANDOM[3], x: 86, y: 20, side: 'right' }
];

const SWITCHES_L1_2 = [
    { id: 'sw1',  x: 30, y: 22, allowed: ['left', 'down'] },
    { id: 'sw2',  x: 57.5, y: 55, allowed: ['right', 'up'] },
    { id: 'sw3',  x: 57.5, y: 22, allowed: ['left', 'right'] }
];

const RAIL_L1_2 = [
    { id: 'v1', x: 10, y: 25, width: 80, height: 2 },
    { id: 'v2', x: 31.5, y: 23, width: 1.5, height: 68 },
    { id: 'v3', x: 62, y: 59, width: 25, height: 2 },
    { id: 'v4', x: 59.5, y: 24, width: 1.5, height: 60 }
];

const ENTRY_RAILS_1 = [
    { y: 44, xStart: 6, sens: 'right', house_x: 5, house_y: 40, house: HOUSE_L1_1, switch: SWITCHES_L1_1, rail: RAIL_L1_1 },
    { y: 84, xStart: 57, sens: 'up', house_x: 56, house_y: 82, house: HOUSE_L1_2, switch: SWITCHES_L1_2, rail: RAIL_L1_2 }
];