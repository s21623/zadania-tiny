function createRandomIntArr(from, to, elements = 1) {
    const randomArray = [];

    for (let i = 0; i < elements; i++) {
        const randomInt = Math.floor(Math.random() * (to - from + 1)) + from;

        randomArray.push(randomInt);
    }

    console.log(randomArray);
}

createRandomIntArr(10, 20, 8);