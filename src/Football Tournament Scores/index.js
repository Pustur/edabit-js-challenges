const WIN_POINTS = 3;
const DRAW_POINTS = 1;
const PT = 0;
const GS = 1;
const GD = 2;

const tournamentScores = matches => {
  const results = matches.reduce((acc, match) => {
    const obj = acc;
    const [teamA, goalsA, goalsB, teamB] = match.split(/[ -]+/).map(str => {
      const num = Number(str);
      return Number.isNaN(num) ? str : num;
    });

    if (!obj[teamA]) obj[teamA] = [0, 0, 0];
    if (!obj[teamB]) obj[teamB] = [0, 0, 0];

    if (goalsA > goalsB) obj[teamA][PT] += WIN_POINTS;
    else if (goalsA < goalsB) obj[teamB][PT] += WIN_POINTS;
    else {
      obj[teamA][PT] += DRAW_POINTS;
      obj[teamB][PT] += DRAW_POINTS;
    }

    obj[teamA][GS] += goalsA;
    obj[teamB][GS] += goalsB;

    obj[teamA][GD] += goalsA - goalsB;
    obj[teamB][GD] += goalsB - goalsA;

    return obj;
  }, {});

  return Object.entries(results)
    .map(([team, scores]) => [team, ...scores])
    .sort(
      ([, PTA, GSA, GDA], [, PTB, GSB, GDB]) =>
        PTB - PTA || GSB - GSA || GDB - GDA,
    );
};

export default tournamentScores;
