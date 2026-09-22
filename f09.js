function tokeletes(n){
    let osszeg = 0;

    for(let i = 1; i < n; i++){
        if(n % i === 0){
            osszeg += i;
        }
    }
    if(osszeg === n){
        return true;
    }
    else{
        return false;
    }

}

console.log(tokeletes(6));
console.log(tokeletes(8));

for( let i = 1; i < 10001; i++){
    if(tokeletes(i)){
        console.log(i);
    }
}


function tokeletes2(n){
    let osszeg = 0;
    for(let i = 1; i <=Math.ceil(n/2); i++){
        if(n % i === 0){
            osszeg += i;
        }
    }
    if(osszeg === n){
        return true;
    }
    else{
        return false;
    }
}

console.log(tokeletes2(6));
console.log(tokeletes2(8));