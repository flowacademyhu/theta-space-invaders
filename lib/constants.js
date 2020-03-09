const BOARDHEIGHT = 20;
const BOARDWIDTH = 20;
const REFRESHRATE = 300; // in ms
const MAXLIFE = 2;
const PLAYERLIMIT = { left: 3, right: 16 };
const PLAYERCHAR = 'P';
const UFOCHAR = 'u';
const MOTHERSHIPCHAR = 'M';
const MOTHERSHIPOFFFOR = 5;
const EMPTYCHAR = '_';
const UFOPOS = { i: 1, j: 1, dir: 0, shot: 0 };
const BULLETCHAR = '•';
const BUNKERCHAR = 'B';
const POINTS = { mothership: 500, ufo: 10 };
const PLAYER = { position: PLAYERLIMIT.left, prevPos: 0, life: MAXLIFE, points: 0 };

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
  BULLETCHAR,
  UFOCHAR,
  BUNKERCHAR,
  POINTS,
  PLAYER
};
