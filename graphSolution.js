function solveGraph(start, end, arcs) {
  if (start === end) return true;
  let v = [];
  let q = arcs.filter((e) => e.start === start);
  while (q.length) {
    let o = q.shift();
    let s = `${o.start} ${o.end}`;
    if (o.end === end) return true;
    if (v.includes(s)) return false;
    else v.push(s);
    q.push(...arcs.filter((e) => e.start === o.end));
  }
  return false;
}

let arcs = [
  { start: "a", end: "b" },
  { start: "b", end: "c" },
  { start: "c", end: "a" },
  { start: "c", end: "d" },
  { start: "e", end: "a" },
];

console.log(solveGraph("a", "e", arcs));
