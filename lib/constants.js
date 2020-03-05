const BOARDHEIGHT = 15;
const BOARDWIDTH = 20;
const REFRESHRATE = 1000; // in ms
const MAXLIFE = 2;
const PLAYERLIMIT = { left: 3, right: 16 };
const PLAYERCHAR = 'P';
const MOTHERSHIPCHAR = 'M';
const EMPTYCHAR = '_';
const UFOPOS = { i: 1, j: 1, dir: 0 };

module.exports = {
  BOARDHEIGHT,
  BOARDWIDTH,
  REFRESHRATE,
  MAXLIFE,
  PLAYERLIMIT,
  PLAYERCHAR,
  MOTHERSHIPCHAR,
  EMPTYCHAR,
  UFOPOS
};
