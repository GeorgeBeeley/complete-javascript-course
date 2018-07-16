var johnTeamAvg = (111 + 120 + 120) / 3;
var mikeTeamAvg = (105 + 122 + 124) / 3;
var maryTeamAvg = (105 + 125 + 124) / 3;

if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
  console.log('John\'s team wins on average.\n\nJohn\'s team avg: ' + johnTeamAvg + '\nMike\'s team avg: ' + mikeTeamAvg + '\nMary\'s team avg: ' + maryTeamAvg);
} else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
  console.log('Mike\'s team wins on average.\n\nMike\'s team avg: ' + mikeTeamAvg + '\nJohn\'s team avg: ' + johnTeamAvg + '\nMary\'s team avg: ' + maryTeamAvg);
} else if (maryTeamAvg > mikeTeamAvg && maryTeamAvg > johnTeamAvg) {
  console.log('Mary\'s team wins on average.\n\nMary\'s team avg: ' + maryTeamAvg + '\nJohn\'s team avg: ' + johnTeamAvg + '\nMike\'s team avg: ' + mikeTeamAvg);
} else {
   console.log('It\'s a tie!\n\nMike\'s team avg: ' + mikeTeamAvg + '\nJohn\'s team avg: ' + johnTeamAvg  + '\nMary\'s team avg: ' + maryTeamAvg);
}
