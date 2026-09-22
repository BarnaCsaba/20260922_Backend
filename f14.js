function egyediek(t) {
  const latott = new Set();
  const eredmeny = [];

  for (const elem of t) {
    if (!latott.has(elem)) {
      latott.add(elem);
      eredmeny.push(elem);
    }
  }

  return eredmeny;
}

console.log(egyediek([1, 2, 3, 2, 4, 1, 5]));