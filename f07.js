let osszeg = 0;
let hatos = 0;
for (let i = 0; i < 21; i++) {
    let kockadobas = Math.floor(Math.random() * 6 + 1);

    if(kockadobas === 6){
        hatos++;
    }
    osszeg += kockadobas;
    process.stdout.write(`${kockadobas},`);
}
console.log(`\n A dobások összege: ${osszeg}, a hatosok száma: ${hatos}`);

