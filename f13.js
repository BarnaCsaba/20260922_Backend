function masodikLegnagyobb(t) {
  let legnagyobb = null;
  let masodik = null;

  for (const szam of t) {
    if (legnagyobb === null || szam > legnagyobb) {
      masodik = legnagyobb;
      legnagyobb = szam;
    } else if (szam < legnagyobb && (masodik === null || szam > masodik)) {
      masodik = szam;
    }
  }

  return masodik;
}

console.log(masodikLegnagyobb([1, 2, 3, 4, 5, 6]));
