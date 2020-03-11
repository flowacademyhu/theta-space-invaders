const BOARDHEIGHT = 40;
const BOARDWIDTH = 60;
const REFRESHRATE = 100; // in ms
const MAXLIFE = 3;
const PLAYERLIMIT = { left: 12, right: BOARDWIDTH - 12 };
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
const UFOBULLETCHAR = '.';
const MOTHERSHIPSPEED = 4;
const bulletObj = { position: 0, row: BOARDHEIGHT - 3, exists: false };
const gameState = { run: false };
const score = { stop: false };

const resetObj = () => {
  UFOPOS.i = 2;
  UFOPOS.j = 1;
  UFOPOS.dir = 0;
  UFOPOS.shot = 0;
  UFOPOS.speed = 10;
  PLAYER.position = PLAYERLIMIT.left;
  PLAYER.prevPos = 0;
  PLAYER.life = MAXLIFE;
  PLAYER.points = 0;
  ufo1.exist = false;
  ufo2.exist = false;
  bulletObj.position = 0;
  bulletObj.row = BOARDHEIGHT - 3;
  bulletObj.exists = false;
};

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
  ufo2,
  UFOBULLETCHAR,
  MOTHERSHIPSPEED,
  bulletObj,
  gameState,
  resetObj,
  score
};
