const pets = ["dog", "cat", "mouse", "fish"];
const sentencePart = {
    dog: "ma psa",
    cat: "ma kota",
    mouse: "ma mysz",
    fish: "ma rybkę"
}

function havePet(name, pet) {
    return name + " " + sentencePart[pet]
}

function printAll(name) {
    for (let pet of pets) {
        console.log(havePet(name, pet))
    }
}

// printAll("Ania");

function printTillFind(name, pet) {
    let i = 0;

    do {
        console.log(havePet(name, pets[i]));
        i++;
    } while(pets[i] === pet);
}

printTillFind("Ania", "cat");