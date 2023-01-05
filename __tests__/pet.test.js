const Pet = require('../src/pet');

describe('constructor', () => {
   it('returns an object', () => {
     expect(new Pet('Fido')).toBeInstanceOf(Object);
   });
 });


 describe('constructor', () => {
   it('sets the name property', () => {
     const pet = new Pet('Fido');

     expect(pet.name).toEqual('Fido');
   });
 });

 describe('constructor', () => {
   it('has a initial age of 1', () => {
     const pet = new Pet('Fido');

     pet.growUp();

     expect(pet.age).toEqual(1);
   });
 });

 describe('growUp', () => {
  it('increases the age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
  })
  
  it('increases the hunger by 5', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5)
    })

  it('decreases the fitness by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  })
})

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });
});

describe('walk', () => {
  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe('Feed', () => {
  it("decreases the pet hunger by 3", () => {
    const pet = new Pet('Fido');

    pet.hunger = 5;
    pet.feed();

    expect(pet.hunger).toEqual(2)
  })
})

 describe('checkUp', () => {
  it('tells you how the pet is feeling', () => {
    const pet = new Pet('Fido');
    pet.fitness = 3;
    pet.checkUp();
    expect(pet.fitness).toBeLessThanOrEqual(3);
    expect(pet.message).toEqual('I need a walk');
  })
  
  it('tells you how hungry the pet is', () => {
    const pet = new Pet('Fido');
    pet.hunger = 6;
    pet.checkUp();
    expect(pet.hunger).toBeGreaterThanOrEqual(5);
    expect(pet.message).toEqual('I am hungry');
  })

  it('tells you how hungry the pet is', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    pet.fitness = 3;
    pet.checkUp();
    expect(pet.hunger).toBeGreaterThanOrEqual(5);
    expect(pet.fitness).toBeLessThanOrEqual(3);
    expect(pet.message).toEqual('I am hungry AND I need a walk');
  })

  describe('isAlive', () => {
    it('tells you if the fitness is 0 and pet is dead', () => {
      const pet = new Pet('Fido');
      pet.fitness = 0;

      expect(pet.isAlive).toBe(false);
    })
  })
    
    it('tells you if your pet hunger is 10 or less and is alive', () => {
      const pet = new Pet('Fido');
      pet.hunger = 10;
      expect(pet.isAlive).toBe(false);
    })

    it('tells you if your pet is 30 or over and is alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;

      expect(pet.isAlive).toBe(false)
    })

    describe('feed', () => {
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
      });
    });