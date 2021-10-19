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

var count = 0;

function getRandomPokemon() {

	var id = Math.floor((Math.random() * 151) + 1);
	return Pokemon.createFromID( id );

}


function getTrainerPokemon(trainerId) {
	var pkm_ids;
	var pkm;
	var pkmv = new Array(0);
	var xhttp = new XMLHttpRequest();

	xhttp.open("GET", "php/fetchLineup.php?id="+trainerId, false);
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
var mypkm;
var oppkm = new Array(0);
var prize;
var initialized = false;

function battleInit() {
	mypkm = getTrainerPokemon(1);
	prize = 0;
	for(let m=0; m < oppPkmCount; m++){
		oppkm.push(getRandomPokemon());
		prize += oppkm[m].getTotal();
	}
	initialized = true;
	document.getElementById("elem").visibility = "visible";
}

function battleBlit() {

	var canvas = document.getElementById('battleCanvas');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var playerSprite = new Image();
	var npcSprite = new Image();
	var character_x = 120;
	var character_y = 200;
	var opponent_x = 375;
	var opponent_y = 100;

	playerSprite.src = mypkm[0].getRelSpritePath();
	npcSprite.src = oppkm[0].getRelSpritePath();

	ctx.drawImage(btImg, 0,0,570,380);
	ctx.drawImage(playerSprite, 0, 0, 96, 96, character_x, character_y, 96, 96);
	ctx.drawImage(npcSprite, 0, 0, 96, 96, opponent_x, opponent_y, 96, 96);

	if (!battleBlit.ffs) {
		battleBlit.ffs = true;
		battleBegin();
	}
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	button1.style.visibility = "visible";
	button2.style.visibility = "visible";
	var elem = document.getElementById("elem");
    elem.style.visibility = "visible";

}

function battleBegin() {

	if ( ! initialized ) {
		battleInit();
	}
	setTimeout(function(){
		console.log("mypkm:", mypkm);
		console.log("oppkm:", oppkm);
		battleBlit();
		if( mypkm[0].speed < oppkm[0].speed ){
			AI_attack();
		}
	}, 500);
}

function AI_attack(){
	let x = numType.get(oppkm[0].getType());
	let y = numType.get(mypkm[0].getType());
	let mod = dmgModifier[x][y];
	if(Math.random() < .9){
		if( parseInt(oppkm[0].getAttack()) > parseInt(oppkm[0].getSpAttack()) ){
			mypkm[0].hitRegular( oppkm[0].getAttack() * mod + (Math.floor((Math.random() - .5) * 10)) );
			console.log("Opponent "+ oppkm[0].getName() +" attacked with a physical attack. ");
			$("#elem").html("Opponent "+ oppkm[0].getName() +" attacked with a physical attack. ");
		}
		else{
			console.log("Opponent "+ oppkm[0].getName() +" attacked with a special attack. ");
			$("#elem").html("Opponent "+ oppkm[0].getName() +" attacked with a special attack. ");
			mypkm[0].hitSpecial( oppkm[0].getSpAttack() * mod + (Math.floor((Math.random() - .5) * 10)) );
		}

		if(mod > 1){
			console.log("It was super effective!");
			$("#elem").append("It was super effective!");
		}
		else if(mod < 1){
			console.log("It was not very effective...");
			$("#elem").append("It was not very effective...");
		}
	}
	else{
		console.log("Opponent "+ oppkm[0].getName() +" missed.");
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
			console.log("Your "+ mypkm[0].getName() +" attacked with a physical attack. ");
			$("#elem").html("Your "+ mypkm[0].getName() +" attacked with a physical attack. ");
		}
		else{
			oppkm[0].hitSpecial(mypkm[0].getSpAttack() * mod + (Math.floor((Math.random() - .5) * 10)));
			console.log("Your "+ mypkm[0].getName() +" attacked with a special attack. ");
			$("#elem").html("Your "+ mypkm[0].getName() +" attacked with a special attack. ");
		}
		if(mod > 1){
			console.log("It was super effective!");
			$("#elem").append("It was super effective!");
		}
		else if(mod < 1){
			console.log("It was not very effective...");
			$("#elem").append("It was not very effective...");
		}
	}
	else{
		console.log("Your "+ mypkm[0].getName() +" missed.");
		$("#elem").html("Your "+ mypkm[0].getName() +" missed.");
	}
	eval_state();
	battleBlit();
	setTimeout(function(){
		AI_attack();
	}, 4000);
}

function eval_state(){
	if (mypkm[0].getHP() <= 0){
		//you've lost all your pokemon
		if(mypkm[1] == null){
			$("#elem").html("you have lost all pokemon. Battle lost.");
			var button1 = document.getElementById("button1");
			var button2 = document.getElementById("button2");
			button1.style.visibility = "hidden";
			button2.style.visibility = "hidden";
			
			setTimeout( function(){
				var elem = document.getElementById("elem");
    			elem.style.visibility = "hidden";
				battleOver();
			}, 3000);
		}
		else{
			mypkm.shift();
			$("#elem").append("<br>You lost a pokemon");
		}
	}
	else if(oppkm[0].getHP() <= 0){
		//opponent lost all your pokemon
		if(oppkm[1] == null){
			$("#elem").html("opponent lost all pokemon. Battle won!");
			var button1 = document.getElementById("button1");
			var button2 = document.getElementById("button2");
			button1.style.visibility = "hidden";
			button2.style.visibility = "hidden";
			$("#elem").append("<br>Your total prize is $" + prize);
			
			xhttp = new XMLHttpRequest();
  			xhttp.onreadystatechange = function() {
   			 	if (this.readyState == 4 && this.status == 200) {
   			 	}
  			};
 			xhttp.open("GET", "php/updateWallet.php?prize="+prize, false);
 			xhttp.send();

			setTimeout( function(){
				var elem = document.getElementById("elem");
    			elem.style.visibility = "hidden";
				battleOver();
			}, 3000);

		}
		else{
			oppkm.shift();
			$("#elem").append("<br>Your opponent lost a pokemon");
		}
	}
}
