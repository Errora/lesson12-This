const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав';
  }
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик';
  }
}

function makeDomestic(isDomestic){
  const newAnimal = {
    name: this.name,
    type: this.type,
    makeSound: this.makeSound,
    isDomestic,
  };
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  return newAnimal;
}

const called = makeDomestic.call(bird,  true);
console.log('результат called = ', called);

const applied = makeDomestic.apply(bird, [true]);
console.log('результат applied = ', applied);

const bound = makeDomestic.bind(dog, false);
bound();
