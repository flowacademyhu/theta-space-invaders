const BOARDHEIGHT = 40;
const BOARDWIDTH = 60;
const REFRESHRATE = 150; // in ms
const MAXLIFE = 2;
const PLAYERLIMIT = { left: 3, right: BOARDWIDTH - 4 };
const PLAYERCHAR = 'P';
const UFOCHAR = 'u';
const MOTHERSHIPCHAR = 'M';
const MOTHERSHIPOFFFOR = 5;
const EMPTYCHAR = ' ';
const UFOPOS = { i: 2, j: 1, dir: 0, shot: 0, speed: 10 };
const BULLETCHAR = '•';
const BUNKERCHAR = 'B';
const BUNKER = { height: 3, width: 5, row: BOARDHEIGHT - 5 };
const POINTS = { mothership: 500, ufo: 20 };
const PLAYER = { position: PLAYERLIMIT.left, prevPos: 0, life: MAXLIFE, points: 0 };
const ufo1 = { x: 0, y: 0, exist: false };
const ufo2 = { x: 0, y: 0, exist: false };

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
  BUNKER,
  POINTS,
  PLAYER,
  ufo1,
  ufo2
};
