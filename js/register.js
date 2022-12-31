let PetsRus = {
    name: 'Pets R Us',

    address: {
        location: '123 Street',
        city: 'PetVillage',
        State: 'Stateasota',
        zip: '12345'
    },

    contactUs: {
        email: 'petsrus@pets.com',
        Phone: '123 - 456 - 7890',
        twitter: '@PetsRUs'
    },

    hours: {
        open: '0800',
        close: '1600'
    },
    pets: []
}


function Pet(name, age, type, gender, breed, temperament, service) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.gender = gender;
    this.breed = breed;
    this.temperament = temperament;
    this.service = service;

}

let inputName = document.getElementById('txtName');
let inputAge = document.getElementById('txtAge');
let inputType = document.getElementById('txtType');
let inputGender = document.getElementById('txtGender');
let inputBreed = document.getElementById('txtBreed');
let inputTemperament = document.getElementById('txtTemp');
let inputService = document.getElementById('txtService');

// register pet from HTML form
function register() {
    console.log(inputName.value, inputAge.value, inputType.value, inputGender.value, inputBreed.value, inputTemperament.value, inputService.value);

    let newPet = new Pet(inputName.value, inputAge.value, inputType.value, inputGender.value, inputBreed.value, inputTemperament.value, inputService.value);

    PetsRus.pets.push(newPet);
    console.log(newPet);
    console.log(PetsRus.pets);
    clearForm();
}
function clearForm() {
    inputName.value = "";
    inputAge.value = "";
    inputType.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputTemperament.value = "";
    inputService.value = "";

}


// // function init() {
// //     let Jake = new Pet('Jake', 'dog', '13', 'male', 'lab', 'calm', 'nails');
// //     let Ivy = new Pet('Ivy', 'dog', '3', 'female', 'mix', 'hyper', 'grooming');
// //     let Penny = new Pet('Penny', 'dog', '10', 'female', 'Australian Cattle', 'loving', 'check-up');
// //     PetsRus.pets.push(Jake, Ivy, Penny);


// }
window.onload = init;