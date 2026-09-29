function rendez(t) {
  const eredmeny = [...t];
  let csere;

  do {
    csere = false;

    for (let i = 0; i < eredmeny.length - 1; i++) {
      if (eredmeny[i] > eredmeny[i + 1]) {
        const temp = eredmeny[i];
        eredmeny[i] = eredmeny[i + 1];
        eredmeny[i + 1] = temp;
        csere = true;
      }
    }
  } while (csere);

  return eredmeny;
}

console.log(rendez([5, 2, 9, 1, 5, 6]));

console.log('helo');