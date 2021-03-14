function f(a) {
  let r = [];
  for (let i in a) {
    let row = a[i];
    for (let j in row) {
      if (row[j] === "0") r.push(`${i} ${j}`);
    }
  }
  return r;
}

function countIslands(s) {
  let a = s.split("\n");
  let q = f(a);
  let c = 0;
  while (q.length) {
    let t = [q.shift()];
    let d = [];
    while (t.length) {
      let [x, y] = t.shift().split(" ");
      for (let [i, j] of [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
      ]) {
        let s = `${+x + i} ${+y + j}`;
        if (q.includes(s) && !d.includes(s)) {
          q.splice(q.indexOf(s), 1);
          t.push(s);
          d.push(s);
        }
      }
    }
    c++;
  }
  return c;
}

console.log(countIslands("00...0\n0...00\n......\n0.0.0.\n0....."));
