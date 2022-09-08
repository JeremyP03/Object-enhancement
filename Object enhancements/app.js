function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

const favoriteNumber = 42;

var instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"

}

let instructor_1 = {
    firstName: "Colt",
    sayHi() {
        return "HI!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}


function createAnimal(species, verb, noise) {
    return {
        species,
        verb,
        noise
    }
}