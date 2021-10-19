let canvas = document.querySelector("canvas");
let KeyStrokeArr = {};

var itr = 0;

function dostuff(jQuery)
{
	if ( itr == 0)
	{$('#bubble1').text('Welcome To my store');
	itr++;}
    else if ( itr == 1)
	{$('#bubble1').text('Use your mouse to scroll through the Pokemon I have available'); 
	itr++;}
    else 
	{$('#bubble1').text('Click on a Pokemon when you want to check the price and buy'); 
	itr++;}
}


function gohome(jQuery)
{
	        window.location.replace("proj3.html");
    }      
	
  var addEvent = document.addEventListener ? function(target,type,action){
    if(target){
        target.addEventListener(type,action,false);
    }
} : function(target,type,action){
    if(target){
        target.attachEvent('on' + type,action,false);
    }
}

///check if user click c to continue dialogue
addEvent(document,'keydown',function(c){
    c = c || window.event;
    var key = c.which || c.keyCode;
    if(key===67){
        $( document ).ready( dostuff );
    }
        else if(key===72){
        $( document ).ready( gohome );
    }
});

var curPrice;
var curWallet;
var curpkm;
var count;


function getPrice(id) {
	var pokeid= "Pokemon ID: "
  curpkm = id;
	
//$('#bubble1').text(pokeid + id);
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //console.log("response rexr is", this.responseText);
        curPrice = parseInt(this.responseText);
      //console.log(curPrice);
      $('#bubble1').text("the price is $" + curPrice);

      if( curPrice <= curWallet && count < 6){
        $('#bubble1').append("<br>would you like to buy?");
         document.getElementById("buy").style.display = "block";
      }
      else if( count >= 6 ){
        $('#bubble1').text("You can only have up to six pokemon. Why don't you sell some?");
      }
      
    }
  };
  xhttp.open("GET", "storeinside.php?id="+id, false);
  xhttp.send();
}

function buyPkm() {
  curWallet -= curPrice;
//console.log("buying pokemon", curpkm, curWallet)

  
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //console.log(this.responseText);
      $('#bubble1').text("You bought the pokemon, you currently have $" + curWallet);
      document.getElementById("buy").style.display = "none";
      count++;
    }
  };
  xhttp.open("GET", "buyPokemon.php?id="+curpkm+"&curWallet="+curWallet, false);
  xhttp.send();
}


xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      let a = this.responseText;
      let res = a.split(",");
       curWallet= parseInt(res[0]);
       count = parseInt(res[1]);
     //console.log(curWallet);
     //console.log(count);
  }
};
xhttp.open("GET", "fetchWallet.php", false);
xhttp.send();

function sell(id, price){
  if (count == 1){
    return;
  }
//console.log(curWallet);
  curWallet += price;
//console.log("selling pokemon", id, price, curWallet);
  
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //console.log(this.responseText);
      $('#bubble1').text("You've released your pokemon.");
      $('#bubble1').append("<br>Oh I think I can see it frolicking just over there!<br>You currently have $" + curWallet);
      // document.getElementById(id).style.display="none";
      // $('label[for="'+id+'"]').innerHTML="RELEASED";
      document.getElementById(id).remove();
      $('label[for="'+id+'"]').remove()
      count--;
    }
  };
  xhttp.open("GET", "sellPokemon.php?id="+id+"&curWallet="+curWallet, false);
  xhttp.send();
}

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      let a = JSON.parse(this.responseText);
      a.forEach(function(pkm){
       document.getElementById("sellBox").innerHTML += '<input type="checkbox" id=' + pkm.id + ' value=' + pkm.name + ' onclick="sell(' + pkm.id + ', ' + pkm.price + ')"">';
       document.getElementById("sellBox").innerHTML += "<label for="+ pkm.id +">"+ pkm.name +"</label><br>";
      });
  }
};
xhttp.open("GET", "fetchSellLineup.php", false);
xhttp.send();



