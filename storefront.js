let canvas = document.querySelector("canvas");
let KeyStrokeArr = {};

var itr = 0;

function dostuff(jQuery)
{
	if ( itr == 0)
	{$('#bubble1').text('My Name is Professor Oak! (press c to continue)');
	itr++;}
    else if ( itr == 1)
	{$('#bubble1').text('I would Like to help you today! (press c to continue)'); 
	itr++;}
    else if ( itr == 2)
	{$('#bubble1').text('Press (e) to enter my store! press (h) to go home!'); 
	itr++;}

}

function enterstore(jQuery)
{
	//$('#bubble1').text('enterstore');
	window.location.href = "storeinside.html";
}

function gohome(jQuery)
{
	//$('#bubble1').text('gohome');
	window.location.href = "proj3.html";
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

addEvent(document,'keydown',function(c){
    c = c || window.event;
    var key = c.which || c.keyCode;
    if(key===67){
        $( document ).ready( dostuff );
    }
	
	if (key == 69)
	{
        $( document ).ready( enterstore );
    }
	
	if (key == 72)
	{
        $( document ).ready( gohome);
    }
});







