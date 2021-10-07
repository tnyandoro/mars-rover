const Rover = require('./rover');


describe('Invalid rover position input', () => {
  it ('Throws an exception if the the initial position is invalid', () => {
    const position = '12 N';
    const rover = new Rover(position);

    expect(() => rover.Move()).toThrowError();
  })

  it ('Returns null if no value is passed to the rover instance object', () => {
    expect(() => new Rover('')).toThrowError('Invalid position');
  });

  it ('Returns null if value null is passed to the rover instance object', () => {
    expect(() => new Rover(null)).toThrowError('Invalid position');
  });

  it ('Returns null if undefined value is passed to the rover instance object', () => {
    expect(() => new Rover(undefined)).toThrowError('Invalid position');
  });

  it ('Throws an exception if Direction is invalid and we try to rotate left', () => {
    const position = '1 2 K';
    const rover = new Rover(position);

    expect(() => rover.NinetyDegreesRotationToLeft()).toThrowError();
  })

  it ('Throws an exception if Direction  is invalid and we try to rotate right', () => {
    const position = '1 2 K';
    const rover = new Rover(position);

    expect(() => rover.NinetyDegreesRotationToRight()).toThrowError();
  })
});

describe('Valid Rover position input and instructions', () => {
  it ('Rotates 90 degrees to the right if Direction is valid', () => {
    let position = '1 2 N';
    const rover = new Rover(position);
    rover.NinetyDegreesRotationToRight();

    expect(rover.Direction).toEqual('E');
  })

  it ('Rotates 90 degrees to the left if Direction is valid', () => {
    let position = '1 2 E';
    const rover = new Rover(position);
    rover.NinetyDegreesRotationToLeft();

    expect(rover.Direction).toEqual('N');
  })

  it ('Moves one step towards the current facing Direction', () => {
    let position = '1 2 N';
    const rover = new Rover(position);
    rover.Move();

    expect(rover.YCoordinate).toBe(3);
  })

  it ('Listens to the instructions/commands and responds accordingly', () => {
    let position = '1 2 N';
    let instructions = 'LMLMLMLMM';
    const rover = new Rover(position);
    rover.Command(instructions);

    expect(rover.XCoordinate).toBe(1);
    expect(rover.YCoordinate).toBe(3);
    expect(rover.Direction).toEqual('N');
  })
})
