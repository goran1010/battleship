export default class Ship {
  constructor(type, coorX, coorY) {
    if (type === "ss") {
      this.health = 1;
      this.coor = [{ coorX: coorX, coorY: coorY }];
    }
    if (type === "dd") {
      this.health = 2;
      this.coor = [
        { coorX: coorX, coorY: coorY },
        { coorX: coorX, coorY: coorY - 1 },
      ];
    }
    if (type === "ca") {
      this.health = 3;
      this.coor = [
        { coorX: coorX, coorY: coorY },
        { coorX: coorX, coorY: coorY - 1 },
        { coorX: coorX, coorY: coorY - 2 },
      ];
    }
    if (type === "bb") {
      this.health = 4;
      this.coor = [
        { coorX: coorX, coorY: coorY },
        { coorX: coorX, coorY: coorY - 1 },
        { coorX: coorX, coorY: coorY - 2 },
        { coorX: coorX, coorY: coorY - 3 },
      ];
    }

    this.sunk = false;
  }
  hit() {
    this.health--;
    if (this.health === 0) this.sunk = true;
  }
}
