const FITNESS_MAXIMUM = 10;
const FITNESS_INCREASE = 4;
const FITNESS_DECREASE = 3;

const HUNGER_INCREASE = 5;
const HUNGER_DECREASE = 3;
const HUNGER_MINIMUM = 0;

const AGE_INCREASE = 1;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.message = '';
  Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
  
Pet.prototype.checkUp = function() {
  if (this.fitness <= 3) {
      this.message = 'I need a walk'
  }
   if (this.hunger >= 5) {
    this.message = 'I am hungry'
  } 
   if (this.hunger >= 5 && this.fitness <= 3) {
    this.message = 'I am hungry AND I need a walk'
   }
}

  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10 ) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  }

  Pet.prototype.feed = function() {
    if ((this.hunger - 3) >= 0 ) {
      this.hunger -= 3;
    } else this.hunger = 0;
  }
}


module.exports = Pet; 