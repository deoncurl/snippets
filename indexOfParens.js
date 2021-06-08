String.prototype.findParenMatch = function (i) {
  let s = this[i];
  let c = s === "(" ? 1 : -1;
  let open = 1;
  while (1) {
    i += c * 1;
    if (i < 0 || i >= this.length) break;
    if ("()".includes(this[i])) {
      if (this[i] === s) open++;
      else open--;
    }
    if (!open) break;
  }
  return open ? -1 : i;
};

let s = ")()((()())())";
console.log(s.findParenMatch(0));
