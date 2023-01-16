class Character {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.hp = 20;
  }
}

class NPC extends Character {
  constructor(name, gender) {
    super(name, gender);
  }

  say() {
    return "Esse é um belo dia, não é mesmo?";
  }
}

const ze = new NPC("Ze das Couves", "Male");

console.log(ze.say());

class Playable extends Character {
  constructor(name, gender, fightStyle) {
    super(name, gender);
    this.hp = 50;
    this.power = 5;
    this.xpPoints = 0;
    this.level = 1;
    this.fightStyle = fightStyle;
  }

  attack() {
    return this.power * this.level;
  }

  takeDamage(damage) {
    this.hp = this.hp - damage;

    return this.hp;
  }
}

const durinn = new Playable("Durinn", "Male", "Melee");

console.log(durinn);

const spider = new Playable("Judite", "Female", "Ranged");
