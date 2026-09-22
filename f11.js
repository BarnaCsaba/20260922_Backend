let szamok = [];

for (let i = 1; i < 16; i++){
    let random_szam = Math.floor(Math.random() * 50) + 1;
    szamok.push(random_szam);
}

console.log(szamok);

let min = szamok[0];
let max = szamok[0];

for ( let i = 0; i < szamok.length; i++){
    if(szamok[i] < min){
        min = szamok[i];
    }
    if(szamok[i] > max){
        max = szamok[i];
    }
}

let osszeg = 0;
let atlag = 0;
for (let i = 0; i < szamok.length; i++){
    osszeg += szamok[i];
}
atlag = Math.round((osszeg / szamok.length) * 10) / 10;

console.log(`A legkisebb szám: ${min}\nA legnagyobb szám: ${max}\nAz összeg: ${osszeg}\nAz átlag: ${atlag}`);
