const ar = 12990;
let kedvezmeny;

let vasarlasok_szama = Math.floor(Math.random() * 10) + 0;
console.log(`A vásárlások száma: ${vasarlasok_szama}`);

if(vasarlasok_szama >= 5){
    kedvezmeny = 0.9;
}
else{
    kedvezmeny = 1;
}

console.log(`'Az eredei ár: ${ar} Ft, a kedvezményes ár: ${Math.round(ar * kedvezmeny)} Ft`);

