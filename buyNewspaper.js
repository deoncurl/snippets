function buyNewspaper(a, b) {
  if ([...b].some((e) => !a.includes(e))) return -1;
  let c = 0;
  let s = "";
  let i = 0;
  while (s !== b) {
    let t = [...(s + a)];
    while (i < t.length) {
      if (t[i] !== b[i]) t.splice(i, 1);
      else i++;
    }
    c++;
    s = t.join("");
  }
  return c;
}

console.log(buyNewspaper("abc", "abccba"));
