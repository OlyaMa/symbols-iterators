export default class Character {
  constructor(name, type) {
    const typesForCheck = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!typesForCheck.includes(type)) {
      throw new Error(
        `The type must be one of the list: ${typesForCheck.join(', ')}`,
      );
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error(
        'The name must be at least 2 and no more than 10 characters',
      );
    }

    this.name = name;
    this.type = type;
    this.health = 50;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
