class Pokemon {

  constructor(
    id,
    name,
    type1,
    type2,
    total,
    hp,
    attack,
    defense,
    spAttack,
    spDefense,
    speed
  ) {
    this.name = name;
    this.type1 = type1;
    this.type2 = type2;
    this.total = parseInt(total);
    this.hp = parseInt(hp);
    this.attack = parseInt(attack);
    this.defense = parseInt(defense);
    this.spAttack = parseInt(spAttack);
    this.spDefense = parseInt(spDefense);
    this.speed = parseInt(speed);
    this.relSpritePath = "pkm_sprites/" + id + ".png";
  }

  static createFromID( id ) {

    var xhttp;
    var pkm;

    xhttp = new XMLHttpRequest();
    xhttp.open("GET", "fetchPokemon.php?id="+id, false);
    xhttp.send();

    if ( xhttp.status === 200 ) {
      pkm = JSON.parse(xhttp.responseText);
    }

    if ( pkm.name == "missingno" ) {
      return null;
    }
    else { 
      return new Pokemon(
        id,
        pkm.name,
        pkm.type1,
        pkm.type2,
        pkm.total,
        pkm.hP,
        pkm.attack,
        pkm.defense,
        pkm.spAttack,
        pkm.spDefense,
        pkm.speed
      );
    }

  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type1;
  }

  getTotal() {
    return this.total;
  }

  getHP() {
    return this.hp;
  }

  getAttack() {
    return this.attack;
  }

  getSpAttack() {
    return this.spAttack;
  }

  getSpeed() {
    return this.speed;
  }

  getRelSpritePath() {
    return this.relSpritePath;
  }

  hitRegular( enemyAttack ) {
    if ( this.defense < enemyAttack ) {
      this.hp -= enemyAttack - this.defense;
    }
    else {
      this.hp -= 1;
    }
  }

  hitSpecial( enemySpAttack ) {
    if ( this.spDefense < enemySpAttack ) {
      this.hp -= enemySpAttack - this.spDefense;
    }
    else {
      this.hp -= 1;
    }
  }

}

