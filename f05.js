const pont = Math.floor(Math.random() * 100) + 1;

switch (true) {
    case pont >= 90:
        console.log(`${pont} pont -> jeles (5)`);
        break;
    case pont >= 80 && pont < 90:
        console.log(`${pont} pont -> jó (4)`);
        break;
    case pont >= 65 && pont < 80:
        console.log(`${pont} pont -> közepes (3)`);
        break;
    case pont >= 50 && pont < 65:
        console.log(`${pont} pont -> elégséges (2)`);
        break;
    default:
        console.log(`${pont} pont -> elégtelen (1)`);
        break;

}
