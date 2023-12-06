import Ship from "./ship.js";

export default class Gameboard {
  constructor() {
    this.allShips = [];
    this.attacksMissedCoor = [];
    this.numberOfShips = { ss: 0, dd: 0, ca: 0, bb: 0 };
  }

  placeShip(newShipType, coorX, coorY) {
    if (newShipType === "ss") {
      this.numberOfShips.ss++;
    }
    if (newShipType === "dd") {
      this.numberOfShips.dd++;
    }
    if (newShipType === "ca") {
      this.numberOfShips.ca++;
    }
    if (newShipType === "bb") {
      this.numberOfShips.bb++;
    }
    this.allShips.push(new Ship(newShipType, coorX, coorY));
  }

  receiveAttack(coorX, coorY) {
    this.attacksMissedCoor.forEach((coor) => {
      if (coor.coorX === coorX && coor.coorY === coorY) return;
    });
    let isAHit = false;
    this.allShips.forEach((ship) => {
      ship.coor.forEach((shipCoor) => {
        if (shipCoor.coorX === coorX && shipCoor.coorY === coorY) {
          ship.hit();
          isAHit = true;
        }
      });
    });
    if (!isAHit) {
      this.attacksMissedCoor.push({ coorX: coorX, coorY: coorY });
    }
  }

  checkShips() {
    if (this.allShips.every((ship) => ship.sunk === true)) {
      gameOver();
    }
  }
}
