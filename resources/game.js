var Clicks=0;
var Price=10;
var UpgClick=1;

function Save(){
 localStorage.setItem("SavedPebbles", Clicks);
 localStorage.setItem("SavedPrice", Price);
 localStorage.setItem("SavedUpg", UpgClick);
}

function Load(){
Clicks=0;
var LoadedClicks = localStorage.getItem("SavedPebbles");
Clicks = LoadedClicks++;

Price=0;
var LoadedPrice = localStorage.getItem("SavedPrice");
Price = LoadedPrice++;

UpgClick = 0;
var LoadedUpg = localStorage.getItem("SavedUpg");
UpgClick = LoadedUpg++;

document.getElementById("counter").innerHTML = Clicks;
document.getElementById("price").innerHTML = Price + " pebbles";
document.getElementById("counter2").innerHTML = UpgClick;

}
 

function Collect(){
Clicks=Clicks+UpgClick;
document.getElementById("counter").innerHTML = Clicks;
}

function Upg(){
if(Clicks>=Price){
Clicks=Clicks-Price;
Price=Price+Price;
UpgClick=UpgClick+1;
document.getElementById("counter").innerHTML = Clicks;
document.getElementById("price").innerHTML = Price + " pebbles";
document.getElementById("counter2").innerHTML = UpgClick;
}else{
alert("Not enough pebbles!");
}

 
}
