//function calls dwarf names in numbered list
var dwarf= ["Dopey", "Bashful", "Grumpy"];
function dwarfRollCall(dwarves) {
  for(var i=0; i<dwarves.length; i++){
return	(i+1) + `. `  + dwarves[i]+ ` ` + (i+2) + `. ` + dwarves[i+1]+` ` +(i+3)+ `. ` +dwarves[i+2]+` ` ; }
}

//function calls array in all uppcase letters followed by "!"
var planeteerCalls =("earth", "wind", "fire", "water", "heart");
function summonCaptainPlanet(planeteerCalls){
	var planet=[];
	for(var i=0; i<planeteerCalls.length;i++){
	planet.push(planeteerCalls[i].toUpperCase()+ `!`);}

return planet;
}

//function states true when word is greater than 4 letters
var words=["earth", "wind", "heart", "fire"];
function longPlaneteerCalls(words) {
  for(var i=0; i<words.length;i++){
	if (words[i].length > 4) {
return true; }
else{
return false; }
}
}

//function selects cheddar in array of strings, returns "no cheese!" when string is not cheddar
function findTheCheese(foods) {
  for(var i=0; i<foods.length; i++){
  if (foods[i] ==="cheddar"){
  return foods[i]}
}
  if(foods !== "cheddar"){
  return "no cheese!"; }
  }
