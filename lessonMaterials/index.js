//this - ключевое слово, указывающее на текущий контекст выполнения кода (тип данных - object)
const user = {
  name: 'Maxim',
  dateOfBirth: 2001,
  getName() {
    return this.name;
  },
  calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.dateOfBirth;
  },
  getAllInfo: function () {
    const age = this.calculateAge();
    console.log(`Имя ${this.name}б возраст ${age}`)
  }
}

console.log(user.getName());
user.getAllInfo();

//bind call apply - привязывают контекст к какой-либо функции

const user2 = {
  name: 'Igor',
};

const user2Name = user.getName.call(user2);


const mainHero = {
  fullName: 'SpiderMan',
  health: 65,
  strength: 5,
}

const badHero = {
  fullName: 'Joker',
  health: 55,
  strength: 10,
}

function printHeroInfo(extraInfo = '') {
  console.log(`Name ${this.fullName}, Health ${this.health}, Strength ${this.strength}, ${extraInfo}`);
}

printHeroInfo(); //-undefined
printHeroInfo.call(badHero, 'Role: zlodej'); //сразу вызывает функцию с переданным параметром, дополнительные параметры передаются просто через запятую
printHeroInfo.apply(badHero, ['Role: zlodej']); // сразу вызывает функцию с переданным параметром, дополнительные параметры передаются в массиве через запятую
printHeroInfo.bind(badHero, 'Role: zlodej'); //не вызывает функцию, а создает новую функцию с новым контекстом
const bindedPrintHero = printHeroInfo.bind(mainHero, 'Role: glavnij geroj');
bindedPrintHero();