var numType = new Map([
	['Normal', 0],
	['Fire', 1],
	['Water', 2],
	['Electric', 3],
	['Grass', 4],
	['Ice', 5],
	['Fighting', 6],
	['Poison', 7],
	['Ground', 8],
	['Flying', 9],
	['Psychic', 10],
	['Bug', 11],
	['Rock', 12],
	['Ghost', 13],
	['Dragon', 14],
	['Dark', 15],
	['Steel', 16]
	]);

var dmgModifier = [
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5],
[1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2],
[1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1],
[1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1],
[1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5],
[1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5],
[2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2],
[1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0],
[1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2],
[1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5],
[1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5],
[1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5],
[1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5],
[1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
[1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5]
];



function getRandomPokemon() {

	var id = Math.floor((Math.random() * 151) + 1);
	return Pokemon.createFromID( id );

}


function getTrainerPokemon(trainerId) {
	var pkm_ids;
    var pkm;
	var pkmv = new Array(0);
	var xhttp = new XMLHttpRequest();

	xhttp.open("GET", "fetchLineup.php?id="+trainerId, false);
	xhttp.send();

	if ( xhttp.status === 200 ) {
		pkm_ids = JSON.parse(xhttp.responseText);
	}

	while ( (pkm = pkm_ids.shift()) != null ) {
		pkmv.push( Pokemon.createFromID( parseInt(pkm) ) );
	}

	return pkmv;
}


var oppPkmCount = Math.floor((Math.random() * 6) + 1);
var a;
var mypkm;
var oppkm = new Array(0);
var prize;

mypkm = getTrainerPokemon(1);

for(m=0; m < oppPkmCount; m++){
	oppkm.push(getRandomPokemon());
}


function battleBegin(xpos){
	
	
	for(m=0; m < 6; m++){
		getpkm(action);
	}


	setTimeout(function(){
		//var numpkm = new Array(3, 3);
		console.log("mypkm:", mypkm);
		console.log("opppkm:", oppkm);
		curpkm = new Array(0, 0);
		curhp = new Array( parseInt(mypkm[0].hp), parseInt(oppkm[0].hp));
		//console.log(mypkm[0].hp);
		if( mypkm[0].speed < oppkm[0].speed ){
			AI_attack();
			//eval_state();
		}
	}, 2000);
}


function AI_attack(){
	let x = numType.get(oppkm[0].getType());
	let y = numType.get(mypkm[0].getType());
	let mod = dmgModifier[x][y];
	if(Math.random() < .9){
		if( parseInt(oppkm[0].getAttack()) > parseInt(oppkm[0].getSpAttack()) ){
			mypkm[0].hitRegular( oppkm[0].getAttack() * mod + (Math.floor((Math.random() - .5) * 10)) );
			$("#elem").html("Opponent "+ oppkm[0].getName() +" attacked with a physical attack. ");
		}
		else{
			$("#elem").html("Opponent "+ oppkm[0].getName() +" attacked with a special attack. ");
			mypkm[0].hitSpecial( oppkm[0].getSpAttack() * mod + (Math.floor((Math.random() - .5) * 10)) );
		}

		if(mod > 1){
			$("#elem").append("It was super effective!");
		}
		else if(mod < 1){
			$("#elem").append("It was not very effective...");
		}
	}
	else{
		$("#elem").html("Opponent "+ oppkm[0].getName() +" missed.");
	}
	eval_state();
}

function attack(phys){
	//console.log(mypkm[0].getType());
	let x = numType.get(mypkm[0].getType());
	let y = numType.get(oppkm[0].getType());
	let mod = dmgModifier[x][y];
	if(Math.random() < .9){
		if(phys){
			oppkm[0].hitRegular(mypkm[0].getAttack() * mod + (Math.floor((Math.random() - .5) * 10)));
			$("#elem").html("Your "+ mypkm[0].getName() +" attacked with a physical attack. ");
		}
		else{
			oppkm[0].hitSpecial(mypkm[0].getSpAttack() * mod + (Math.floor((Math.random() - .5) * 10)));
			$("#elem").html("Your "+ mypkm[0].getName() +" attacked with a special attack. ");
		}
		if(mod > 1){
			$("#elem").append("It was super effective!");
		}
		else if(mod < 1){
			$("#elem").append("It was not very effective...");
		}
	}
	else{
		$("#elem").html("Your "+ mypkm[0].getName() +" missed.");
	}
	eval_state();
	setTimeout(function(){
		AI_attack();
	}, 4000);
}

function eval_state(){
	if (mypkm[0].getHP() <= 0){
		//you've lost all your pokemon
		if(mypkm[1] == null){
			$("#elem").html("you have lost all pokemon.<br>Battle lost.");
			$("button").hide();
		}
		else{
			mypkm.shift();
			$("#elem").append("<br>You lost a pokemon");
		}
	}
	else if(oppkm[0].getHP() <= 0){
		//opponent lost all your pokemon
		if(oppkm[1] == null){
			$("#elem").html("opponent lost all pokemon.<br>Battle won!");
			$("button").hide();
			$("#elem").append("<br>Your total prize is $" + prize);
		}
		else{
			oppkm.shift();
			$("#elem").append("<br>Your opponent lost a pokemon");
		}
	}
}
