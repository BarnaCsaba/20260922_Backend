const random_number = Math.floor(Math.random() * 100) + 1;

console.log(`A véletlenszerűen generált szám: ${random_number}`);

if(random_number % 2 === 0) {
    console.log("A szám páros.");
}
else {
    console.log("A szám páratlan.");
}


let bool = random_number > 50;
if(bool){
    bool = true;
    console.log("A szám nagyobb, mint 50.");
}
else{
    bool = false;
    console.log("A szám kisebb, mint 50.");
}