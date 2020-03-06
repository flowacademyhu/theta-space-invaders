const BOARDHEIGHT = 20;
const BOARDWIDTH = 20;
const REFRESHRATE = 300; // in ms
const MAXLIFE = 2;
const PLAYERLIMIT = { left: 3, right: 16 };
const PLAYERCHAR = 'P';
const MOTHERSHIPCHAR = 'M';
const MOTHERSHIPOFFFOR = 5;
const EMPTYCHAR = '_';
const UFOPOS = { i: 1, j: 1, dir: 0, shot: 0 };
const BULLETCHAR = '•';

module.exports = {
  BOARDHEIGHT,
  BOARDWIDTH,
  REFRESHRATE,
  MAXLIFE,
  PLAYERLIMIT,
  PLAYERCHAR,
  MOTHERSHIPCHAR,
  MOTHERSHIPOFFFOR,
  EMPTYCHAR,
  UFOPOS,
  BULLETCHAR
};
