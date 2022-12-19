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
  it('increases the age by', () => {
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