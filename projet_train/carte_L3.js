const HOUSE_L3_1 = [
    { id: COULEUR_RANDOM[0], x: 5, y: 20, side: 'left' },
    { id: COULEUR_RANDOM[1], x: 5, y: 60, side: 'left' },
    { id: COULEUR_RANDOM[2], x: 20, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[3], x: 38, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[4], x: 56, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[5], x: 74, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[6], x: 85, y: 40, side: 'right' },
    { id: COULEUR_RANDOM[7], x: 85, y: 60, side: 'right' },
    { id: COULEUR_RANDOM[8], x: 20, y: 82, side: 'bottom' },
    { id: COULEUR_RANDOM[9], x: 38, y: 82, side: 'bottom' },
    { id: COULEUR_RANDOM[10], x: 56, y: 82, side: 'bottom' },
    { id: COULEUR_RANDOM[11], x: 74, y: 82, side: 'bottom' }
];

const SWITCHES_L3_1 = [
    { id: 'sw1',  x: 21.5, y: 22, allowed: ['left', 'up'] },
    { id: 'sw2',  x: 39.5, y: 22, allowed: ['left', 'up'] },
    { id: 'sw3',  x: 57.5, y: 22, allowed: ['left', 'up'] },
    { id: 'sw4',  x: 75,   y: 22, allowed: ['left', 'up'] },
    { id: 'sw5',  x: 39.5, y: 42, allowed: ['right', 'down'] },
    { id: 'sw6',  x: 57.5, y: 42, allowed: ['right', 'down'] },
    { id: 'sw7',  x: 75,   y: 42, allowed: ['right', 'up'] },
    { id: 'sw8',  x: 21.5, y: 62, allowed: ['left', 'down'] },
    { id: 'sw9',  x: 39.5, y: 62, allowed: ['left', 'down'] },
    { id: 'sw10', x: 57.5, y: 62, allowed: ['right', 'down'] },
    { id: 'sw11', x: 75,   y: 62, allowed: ['right', 'down'] },
];

const RAIL_L3_1 = [
    { id: 'v1', x: 23, y: 10, width: 1.5, height: 18 },
    { id: 'v2', x: 41, y: 10, width: 1.5, height: 18 },
    { id: 'v3', x: 59, y: 10, width: 1.5, height: 18 },
    { id: 'v4', x: 77, y: 10, width: 1.5, height: 37 },
    { id: 'v10', x: 23, y: 65, width: 1.5, height: 18 },
    { id: 'v11', x: 41, y: 45, width: 1.5, height: 45 },
    { id: 'v12', x: 59, y: 45, width: 1.5, height: 45 },
    { id: 'v9', x: 77, y: 65, width: 1.5, height: 18 },
    { id: 'v5', x: 12, y: 26, width: 66, height: 2 },
    { id: 'v6', x: 12, y: 45, width: 80, height: 2 },
    { id: 'v7', x: 12, y: 65, width: 30, height: 2 },
    { id: 'v8', x: 60, y: 65, width: 30, height: 2 },
];

const HOUSE_L3_2 = [
    { id: COULEUR_RANDOM[0], x: 5, y: 20, side: 'left' },
    { id: COULEUR_RANDOM[1], x: 5, y: 60, side: 'left' },
    { id: COULEUR_RANDOM[2], x: 5, y: 40, side: 'left' },
    { id: COULEUR_RANDOM[3], x: 38, y: 4, side: 'right' },
    { id: COULEUR_RANDOM[4], x: 56, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[5], x: 74, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[6], x: 85, y: 20, side: 'right' },
    { id: COULEUR_RANDOM[7], x: 85, y: 82, side: 'right' },
    { id: COULEUR_RANDOM[8], x: 20, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[9], x: 20, y: 82, side: 'bottom' },
    { id: COULEUR_RANDOM[10], x: 38, y: 82, side: 'bottom' },
    { id: COULEUR_RANDOM[11], x: 85, y: 60, side: 'right' }
];

const SWITCHES_L3_2 = [
    { id: 'sw1',  x: 21.5, y: 22, allowed: ['left', 'up'] },
    { id: 'sw2',  x: 75, y: 85, allowed: ['right', 'up'] },
    { id: 'sw3',  x: 57.5, y: 22, allowed: ['left', 'up'] },
    { id: 'sw4',  x: 75,   y: 22, allowed: ['right', 'up'] },
    { id: 'sw5',  x: 39.5, y: 42, allowed: ['left', 'down'] },
    { id: 'sw6',  x: 39.5, y: 22, allowed: ['left', 'up'] },//
    { id: 'sw7',  x: 75,   y: 42, allowed: ['left', 'up'] },
    { id: 'sw8',  x: 21.5, y: 62, allowed: ['left', 'down'] },
    { id: 'sw9',  x: 39.5, y: 62, allowed: ['left', 'down'] },
    { id: 'sw10', x: 57.5, y: 42, allowed: ['left', 'up'] },
    { id: 'sw11', x: 75,   y: 62, allowed: ['up', 'right'] },
];

const RAIL_L3_2 = [
    { id: 'v1', x: 23, y: 10, width: 1.5, height: 18 },
    { id: 'v2', x: 41, y: 10, width: 1.5, height: 18 },
    { id: 'v3', x: 78, y: 66, width: 15, height: 2 },
    { id: 'v4', x: 77, y: 10, width: 1.5, height: 80 },
    { id: 'v10', x: 23, y: 65, width: 1.5, height: 18 },
    { id: 'v11', x: 41, y: 45, width: 1.5, height: 45 },
    { id: 'v12', x: 59, y: 18, width: 1.5, height: 25 },
    { id: 'v9', x: 77, y: 25, width: 15, height: 2 },
    { id: 'v5', x: 12, y: 26, width: 50, height: 2 },
    { id: 'v6', x: 12, y: 45, width: 68, height: 2 },
    { id: 'v7', x: 12, y: 65, width: 30, height: 2 },
    { id: 'v8', x: 62, y: 88, width: 28, height: 2 },
];

const ENTRY_RAILS_3 = [
    { y: 44, xStart: 6, sens: 'right', house_x: 5, house_y: 40, house: HOUSE_L3_1, switch: SWITCHES_L3_1, rail: RAIL_L3_1 },
    { y: 86, xStart: 56, sens: 'right', house_x: 56, house_y: 82, house: HOUSE_L3_2, switch: SWITCHES_L3_2, rail: RAIL_L3_2 }
];