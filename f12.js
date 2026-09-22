function parosak(t) {
  const eredmeny = [];

  for (const szam of t) {
    if (szam % 2 === 0) {
      eredmeny.push(szam);
    }
  }

  return eredmeny;
}

console.log(parosak([1, 2, 3, 4, 5, 6]));
