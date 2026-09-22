// szorzotabla 10-ig

for (let i = 1; i <= 10; i++){
    let sor = '';
    for (let j = 1; j <= 10; j++){
        String().padStart(4, ' ');
        sor += (i * j).toString().padStart(4, ' ');  
    }
    console.log(sor);
}

