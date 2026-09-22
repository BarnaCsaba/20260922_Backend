function szamjegyOsszeg(n) {
    let osszeg = 0;
    while (n > 0) {
        osszeg += n % 10;
        n = Math.floor(n / 10);
    }
    return osszeg;
}


console.log(szamjegyOsszeg(12345));
console.log(szamjegyOsszeg(9876));
console.log(szamjegyOsszeg(565463));