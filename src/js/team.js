import Character from './character.js';

export default class Team {
  constructor() {
    this[0] = new Character('Bowman', 'Bowman');
    this[1] = new Character('Daemon', 'Daemon');
    this[2] = new Character('Swordsman', 'Swordsman');
    this[3] = new Character('Undead', 'Undead');
    this[4] = new Character('Zombie', 'Zombie');
    this[5] = new Character('Magician', 'Magician');
    this.length = 6;
    this[Symbol.iterator] = function () {
      const maxLength = this.length;
      const element = this;
      let i = 0;
      return {
        next() {
          if (i < maxLength) {
            i++;
            return {
              done: false,
              value: element[Math.floor(Math.random() * maxLength)],
            };
          }
          return { done: true, value: undefined };
        },
      };
    };
  }
}
