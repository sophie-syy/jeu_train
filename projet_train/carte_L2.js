const HOUSE_L2_1 = [
    { id: COULEUR_RANDOM[0], x: 3, y: 26, side: 'left' },
    { id: COULEUR_RANDOM[1], x: 3, y: 60, side: 'left' },
    { id: COULEUR_RANDOM[2], x: 20, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[3], x: 43.5, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[4], x: 87, y: 60, side: 'right' },
    { id: COULEUR_RANDOM[5], x: 43.5, y: 85, side: 'bottom' }
];

const SWITCHES_L2_1 = [
    { id: 'sw1',  x: 21.5, y: 32, allowed: ['left', 'up'] },
    { id: 'sw2',  x: 45, y: 32, allowed: ['left', 'up'] },
    { id: 'sw3',  x: 75,   y: 32, allowed: ['left', 'down'] },
    { id: 'sw4',  x: 75,   y: 63, allowed: ['left', 'right'] },
    { id: 'sw5',  x: 45, y: 63, allowed: ['left', 'down'] }
];

const RAIL_L2_1 = [
    { id: 'v1', x: 23, y: 10, width: 1.5, height: 25 },
    { id: 'v2', x: 46.5, y: 10, width: 1.5, height: 25 },
    { id: 'v3', x: 7, y: 65, width: 87, height: 2 },
    { id: 'v4', x: 77, y: 10, width: 1.5, height: 55 },
    { id: 'v5', x: 5, y: 35, width: 73, height: 2 },
    { id: 'v10', x: 47, y: 65, width: 1.5, height: 25 }
];

const HOUSE_L2_2 = [
    { id: COULEUR_RANDOM[0], x: 5, y: 25, side: 'left' },
    { id: COULEUR_RANDOM[1], x: 5, y: 60, side: 'left' },
    { id: COULEUR_RANDOM[2], x: 20, y: 4, side: 'top' },
    { id: COULEUR_RANDOM[3], x: 87, y: 25, side: 'right' },
    { id: COULEUR_RANDOM[4], x: 87, y: 60, side: 'right' },
    { id: COULEUR_RANDOM[5], x: 87, y: 82, side: 'right' }
];

const SWITCHES_L2_2 = [
    { id: 'sw1',  x: 21.5, y: 28, allowed: ['left', 'up'] },
    { id: 'sw2',  x: 48, y: 85, allowed: ['right', 'up'] },
    { id: 'sw3',  x: 48, y: 62, allowed: ['right', 'left'] },
    { id: 'sw4',  x: 68,   y: 28, allowed: ['left', 'right']},
    { id: 'sw5',  x: 68, y: 62, allowed:  ['right', 'up'] }
];

const RAIL_L2_2 = [
    { id: 'v1', x: 23, y: 15, width: 1.5, height: 18 },
    { id: 'v2', x: 70, y: 32, width: 1.5, height: 35 },
    { id: 'v3', x: 50, y: 66, width: 1.5, height: 22 },
    { id: 'v4', x: 12, y: 32, width: 75, height: 2 },
    { id: 'v5', x: 12, y: 65, width: 75, height: 2 },
    { id: 'v6', x: 12, y: 88, width: 75, height: 2 }
];

const ENTRY_RAILS_2 = [
    { y: 6, xStart: 75, sens: 'down', house_x: 74, house_y: 4, house: HOUSE_L2_1, switch: SWITCHES_L2_1, rail: RAIL_L2_1 },
    { y: 86, xStart: 6, sens: 'right', house_x: 5, house_y: 82, house: HOUSE_L2_2, switch: SWITCHES_L2_2, rail: RAIL_L2_2 },
];
