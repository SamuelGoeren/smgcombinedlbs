export const SRC_BASE_URL = 'https://www.speedrun.com/api/v1';
export const TABLE_HEADER = ["Place", "Name", "Time", "Mode",  "Date"]

//SRC's internal ID's for various parameters
export const CHARACTER_ANY = 'var-kn0m3zl3';
export const CHAR_MARIO_ANY = '4lxrr2l2';
export const CHAR_LUIGI_ANY = '814880ld';

export const CHARACTER_120 = 'var-ql61m789';
export const CHAR_MARIO_120 = 'z1966014';
export const CHAR_LUIGI_120 = 'p12rr7lx';

export const SMG1 = 'pd0wg21e';
export const CAT_ANY = 'zd365vdn';
export const CAT_120 = 'rklq0n2n';
export const CAT_242 = 'wkplz02r';

export const CAT_NAME_TO_ID = {
    'any' : CAT_ANY,
    '120' : CAT_120,
    '242' : CAT_242,
}

export const CHAR_NAME_TO_ID_ANY = {
    'mario' : CHAR_MARIO_ANY,
    'luigi' : CHAR_LUIGI_ANY
}

export const CHAR_NAME_TO_ID_120 = {
    'mario' : CHAR_MARIO_120,
    'luigi' : CHAR_LUIGI_120
}

export const MODE = 'r0nwg08q';
export const COSTAR = 'g0q5n2qp';
export const NOCOSTAR = 'y4lxp4q2';

export const MODE_ID_TO_NAME = {
    [COSTAR] : 'Co-Star',
    [NOCOSTAR] : "No Co-Star"
}