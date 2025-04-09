export const gridattackLevels = [
  ['grid-template-columns: 1fr 1fr;'],
  ['grid-template-columns: 20% 40% 40%;'],
  ['grid-template-columns: repeat(4, 25%);'],
  ['grid-template-columns: repeat(3, 30%);'],
  ['grid-template-columns: 100px 30%;'],
  ['grid-template-columns: repeat(3, 1fr);'],
  ['grid-template-columns: repeat(4, 1fr);'],
  ['grid-template-columns: 100px repeat(3, 1fr);'],
  ['grid-template-columns: 20% 100px 1fr;'],
  ['grid-template-columns: 1fr auto 1fr;'],
  ['grid-template: 100px 150px 1fr / 25% 50% 25%;'],
  ['grid-template: 1fr 2fr 1fr / 1fr 2fr 1fr;'],
  ['gap: 0 15px;'],
  ['grid-template: 1fr 2fr 1fr / 1fr 2fr 1fr;', 'gap: 0 5%;'],
  ['gap: 40px 0;'],
  ['gap: 15% 10px;'],
  ['gap: 20px;'],
  ['grid-template: 1fr 1fr 100px / 1fr 100px auto;', 'gap: 10% 20px;'],
  ['grid-column-start: 3;'],
  ['grid-column-start: 2;', 'grid-column-end: 4;'],
  ['grid-column-start: 2;', 'grid-column-end: 4;'],
  [
    'grid-column-start: span 2;',
    '',
    'gap: 15px;',
    'grid-template: 100px 1fr / 1fr 1fr 1fr;',
  ],
  ['grid-row-start: 2;'],
  ['grid-row-start: 1;', 'grid-row-end: 5;'],
  ['grid-row: span 4;'],
  ['grid-row: span 3;', 'grid-column: span 2;'],
  [
    'grid-area: 3 / 2 / 5 / 4;',
    '',
    'gap: 15px;',
    'grid-template: repeat(4, 1fr) / repeat(4, 1fr);',
  ],
  ['grid-area: 2 / 1 / 5 / 4;'],
  [
    'grid-area: 1 / 4 / 4 / 5;',
    '',
    'grid-area: 3 / 2 / 5 / 4;',
    '',
    'gap: 15px 10px;',
  ],
  ['grid-area: 1 / 1 / 4 / 4;'],
  [
    'grid-area: 1 / 1 / 4 / 3;',
    '',
    'grid-area: 1 / 3 / 5 / 4;',
    '',
    'gap: 15px;',
    'grid-template-columns: 1fr 2fr 1fr;',
  ],
  [
    'grid-area: 3 / 1 / 4 / 4;',
    '',
    'grid-area: 1 / 1 / 3 / 3;',
    '',
    'gap: 15px 10px;',
  ],
  ['grid-template-columns: min-content 1fr;'],
  ['grid-template: 1fr min-content / min-content 1fr;'],
  ['grid-template: 1fr 1fr / max-content 1fr;'],
  ['grid-template: 1fr 1fr / max-content min-content;'],
  ['grid-template-columns: minmax(250px, 1fr) 1fr;'],
  ['grid-template: 1fr 1fr / minmax(auto, 200px) 150px;'],
  [
    'grid-template: 1fr 1fr / minmax(min-content, 200px) minmax(min-content, auto)',
  ],
  ['grid-template-columns: repeat(4, 150px);'],
  ['gap: 15px;', 'grid-template-columns: repeat(4, minmax(150px, auto));'],
  ['gap: 15px;', 'grid-template-columns: repeat(2, minmax(100px, 1fr));'],
  ['grid-template: 100px 1fr 100px / 100px 1fr 100px;'],
  [
    'grid-area: 1 / 1 / 2 / 4;',
    '',
    'grid-area: 2 / 2 / 4 / 4;',
    '',
    'gap: 15px;',
  ],
];
