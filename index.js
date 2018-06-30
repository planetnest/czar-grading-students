const gradeList = (list) => {
  return list.map(s => grade(s));
}

const round = score => {
  let m = score % 5;
  if (m == 0 || 5-m >= 3) return score;
  let d = Math.floor(score / 5);
  return (d+1) * 5;
}

const grade = (score) => {
  if (score < 38) return score;
  return round(score);
}

module.exports = function(input) {
  return Array.isArray(input) ? gradeList(input) : grade(input);
}