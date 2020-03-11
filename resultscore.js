function team1(team1Over, team1Runs,innerData) {
 var runs=localStorage.getItem(team1Runs);
 document.getElementById(team1Over).innerHTML=innerData+runs;
} 
function team2(team2Over,team2Runs,inner2Data){
  var teamruns=localStorage.getItem(team2Runs);
document.getElementById(team2Over).innerHTML=inner2Data+teamruns;
}
function team(teamchampions,teamA,teamB,winner){
  var teamAchamps=localStorage.getItem(teamA);
  var teamBchamps=localStorage.getItem(teamB);
  if(teamAchamps>teamBchamps){
  document.getElementById(teamchampions).innerHTML= winner+"TEAM1 IS WINNER";
  }
  else{
    document.getElementById(teamchampions).innerHTML=winner+"TEAM2 IS WINNER";
  }
}