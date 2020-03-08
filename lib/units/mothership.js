const { MOTHERSHIPCHAR, EMPTYCHAR, BOARDWIDTH, MOTHERSHIPOFFFOR } = require('./../constants');

const mothership = { position: 0, visible: false, roundCount: 0, directionRight: true };

const mothershipGotHit = (matrix) => {
  matrix[0][mothership.position] = EMPTYCHAR;
  mothership.position = 0;
  mothership.visible = false;
  mothership.roundCount = 0;
  mothership.directionRight = true;
};

const moveShip = () => {
  if (mothership.visible === true) {
    if (mothership.position < BOARDWIDTH - 1 && mothership.directionRight === true) {
      mothership.position++;
    } else if (mothership.position > 0 && mothership.directionRight === false) {
      mothership.position--;
    } else if (mothership.position === 0 || mothership.position === BOARDWIDTH - 1) {
      mothership.visible = false;
      if (mothership.directionRight === false) mothership.directionRight = true;
      else mothership.directionRight = false;
    }
  } else {
    if (mothership.roundCount < MOTHERSHIPOFFFOR) {
      mothership.roundCount++;
    } else {
      mothership.roundCount = 0;
      mothership.visible = true;
    }
  }
};

const putMothershipInMatrix = (matrix) => {
  if (mothership.visible === true) {
    matrix[0][mothership.position] = MOTHERSHIPCHAR;
    if (mothership.directionRight === true) matrix[0][mothership.position - 1] = EMPTYCHAR;
    else {
      if (mothership.position < BOARDWIDTH - 1) matrix[0][mothership.position + 1] = EMPTYCHAR;
    }
  } else {
    matrix[0][0] = EMPTYCHAR;
    matrix[0][BOARDWIDTH - 1] = EMPTYCHAR;
  }
};

const mothershipInit = (matrix) => {
  moveShip();
  putMothershipInMatrix(matrix);
};

module.exports = {
  mothershipInit,
  mothershipGotHit
};
