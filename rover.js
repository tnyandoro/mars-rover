class Rover {
  constructor(position) {
    if(!position) {
      throw ('Invalid position');
    };

    position = position.split(' ');
    this.XCoordinate = parseInt(position[0]);
    this.YCoordinate = parseInt(position[1]);
    this.Direction = position[2];
    this.Plateau = [5, 5];
  }

  Command (instructions) {
    if (!instructions) return;

    const instructionsArray = instructions.split('');

    for (let index = 0; index < instructionsArray.length; index++) {
      switch (instructionsArray[index]) {
        case 'R':
          this.NinetyDegreesRotationToRight();
          break;

        case 'L':
          this.NinetyDegreesRotationToLeft();
          break;

        case 'M':
          this.Move();
          break;

        default:
          throw 'unknown Direction in Command -> ' + this.Direction;
      }
    }
  };

  Move () {
    switch (this.Direction) {
      case 'N':
        let nextYCoordinate = this.YCoordinate + 1;
        if (nextYCoordinate > this.Plateau.Top) {
          throw 'You fell off the plateau';
        }
        this.YCoordinate = nextYCoordinate;
        break;

      case 'S':
        this.YCoordinate -= 1;
        break;

      case 'E':
        this.XCoordinate += 1;
        break;

      case 'W':
        this.XCoordinate -= 1;
        break;

      default:
        throw 'unknown Direction in Move -> ' + this.Direction;
    }
  }

  NinetyDegreesRotationToLeft () {
    switch (this.Direction) {
      case 'N':
        this.Direction = 'W';
        break;

      case 'W':
        this.Direction = 'S';
        break;

      case 'S':
        this.Direction = 'E';
        break;

      case 'E':
        this.Direction = 'N';
        break;

      default:
        throw 'unknown Direction ' + this.Direction;
    }
  };

  NinetyDegreesRotationToRight () {
    switch (this.Direction) {
      case 'N':
        this.Direction = 'E';
        break;

      case 'E':
        this.Direction = 'S';
        break;

      case 'S':
        this.Direction = 'W';
        break;

      case 'W':
        this.Direction = 'N';
        break;

      default:
        throw 'unknown Direction ' + this.Direction;
    }
  };
}

module.exports = Rover;
