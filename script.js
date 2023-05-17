let election = [
  {
    partyName: "a",
    votes: 693413,
    bufferVotes: 693413,
    winnerDeputies: 0,
  },
  {
    partyName: "b",
    votes: 550710,
    bufferVotes: 550710,
    winnerDeputies: 0,
  },
  {
    partyName: "c",
    votes: 228825,
    bufferVotes: 228825,
    winnerDeputies: 0,
  },
  {
    partyName: "d",
    votes: 18600,
    bufferVotes: 18600,
    winnerDeputies: 0,
  },
];
let total_candidate_number = 16; //secime katilan vekil sayisi
let max = -Infinity;
let selectedParty;
for (let i = 0; i < total_candidate_number; i++) {
  for (let j = 0; j < election.length; j++) {
    if (election[j].bufferVotes > max) {
      max = election[j].bufferVotes;
      selectedParty = election[j];
    }
  }
  selectedParty.winnerDeputies += 1;
  selectedParty.bufferVotes = selectedParty.votes / (selectedParty.winnerDeputies + 1);
  max = -Infinity;
}
election.forEach((element) => {
  console.log(`
   ${element.partyName} partisi: ${element.winnerDeputies} vekil kazandı`);
});