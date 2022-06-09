const randomInt = Math.floor(Math.random() * 31);

if (randomInt <= 10) {
    console.log("Wynik losowania w przedziale 0-10");
} else if (randomInt <= 20) {
    console.log("Wynik losowania w przedziale 11-20");
} else {
    console.log("Wynik losowania w przedziale 21-30");
}
