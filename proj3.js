$(document).ready(function(){
    $(".home").click();
});
$(document).on("click",".home",function(){
    $("#hm").prop("checked", true);
    $(".home").css({"border-style" : "solid", "border-width": "2px", "border-color": "black"});
    $(".battle").css({"border-style" : "solid", "border-width": "1px", "border-color": "black"});
    $(".store").css({"border-style" : "solid", "border-width": "1px", "border-color": "black"});
    $('#display').hide();
    $('#display').html('<div class="container"><p><img src="images/301412-Pokemon-748x421.jpg" alt="pic" class="photo"></p><div class="center"><p><b>Welcome to the wonderful world of Pokemon!</b></p><p><img src="images/logo.png" alt="logo" class "photo" style="height: 10%; width: 10%;"><p>In this game you are able to purchase the pokemon of your choice with currency earned through battle with trainers.</p><p>The amount each pokemon costs is based on their level, rarity and power in combat.</p></div><div class="commands"><table><tr><th>Key Press</th><th>Action Taken</th></tr><tr><td>W</td><td>Move up on the Canvas</td></tr><tr><td>A</td><td>Move left on the Canvas</td></tr><tr><td>S</td><td>Move down on the Canvas</td></tr><tr><td>D</td><td>Move right on the Canvas</td></tr><tr><td>E</td><td>Starts battle with enemy trainer when facing them</td></tr></table></div></div>')
	.fadeIn()
});
$(document).on("click",".battle",function(){
    $("#bt").prop("checked", true);
    $(".home").css({"border-style" : "solid", "border-width": "1px", "border-color": "black"});
    $(".battle").css({"border-style" : "solid", "border-width": "2px", "border-color": "black"});
    $(".store").css({"border-style" : "solid", "border-width": "1px", "border-color": "black"});
    $('#display').hide();
    $('#display').html('<div class="container"><p><img src="images/gameboy.png" alt="gameboy" class="photo" style="width: 60%; height: 60%;"></p><canvas id="myCanvas" height="380" width="570" ></canvas><canvas id="battleCanvas" height="380" width="570"></canvas><button type="button" id="button1" onclick="attack(true)">attack</button><button type="button" id="button2" onclick="attack(false)">sp attack</button><div id="elem"></div><audio autoplay loop id="myAudio"><source src="106-the road to viridian city - from palette.mp3" type="audio/mpeg"></audio><audio id="myAudio2" autoplay loop><source src="107-battle (vs wild pokemon).mp3" type="audio/mpeg"></audio></div>')
    .fadeIn()
    startAni();
});
$(document).on("click",".store",function(){
    $("#st").prop("checked", true);
    $(".home").css({"border-style" : "solid", "border-width": "1px", "border-color": "black"});
    $(".battle").css({"border-style" : "solid", "border-width": "1px", "border-color": "black"});
    $(".store").css({"border-style" : "solid", "border-width": "2px", "border-color": "black"});
    goToStore();
});

function goToStore(){
    var radioValue = $("input[name='option']:checked").val();
	if(radioValue == "st"){
        location.href = "storefront.html";
    }
}
