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

let c = 0;
function Pet(owner, ownereMail, phone, name, age, type, gender, breed, temperament, service) {
    this.ownerName = owner;
    this.ownereMail = ownereMail;
    this.phone = phone;
    this.name = name;
    this.age = age;
    this.type = type;
    this.gender = gender;
    this.breed = breed;
    this.temperament = temperament;
    this.service = service;
    this.id = c++;

}
let inputownerName = document.getElementById('txtownerName');
let inputeMail = document.getElementById('txteMail');
let inputPhone = document.getElementById('txtPhone');
let inputName = document.getElementById('txtName');
let inputAge = document.getElementById('txtAge');
let inputType = document.getElementById('txtType');
let inputGender = document.getElementById('txtGender');
let inputBreed = document.getElementById('txtBreed');
let inputTemperament = document.getElementById('txtTemp');
let inputService = document.getElementById('txtService');


function validatePet(thePet) {
    let validation = true;

    inputownerName.classList.remove('alert-error');
    inputeMail.classList.remove('alert-error');
    inputPhone.classList.remove('alert-error');
    inputName.classList.remove('alert-error');
    inputAge.classList.remove('alert-error');
    inputType.classList.remove('alert-error');
    inputGender.classList.remove('alert-error');
    inputBreed.classList.remove('alert-error');
    inputTemperament.classList.remove('alert-error');
    inputService.classList.remove('alert-error');




    if (thePet.ownerName == "") {
        validation = false;
        inputownerName.classList.add("alert-error");
    }

    if (thePet.eMail == "") {
        validation = false;
        inputeMail.classList.add("alert-error");
    }

    if (thePet.phone == "") {
        validation = false;
        inputPhone.classList.add("alert-error");
    }

    if (thePet.name == "") {
        validation = false;
        inputName.classList.add("alert-error");
    }

    if (thePet.age == "") {
        validation = false;
        inputAge.classList.add("alert-error");
    }
    if (thePet.type == "") {
        validation = false;
        inputType.classList.add("alert-error");
    }

    if (thePet.gender == "") {
        validation = false;
        inputGender.classList.add("alert-error");
    }

    if (thePet.breed == "") {
        validation = false;
        inputBreed.classList.add("alert-error");
    }

    if (thePet.temperament == "") {
        validation = false;
        inputTemperament.classList.add("alert-error");
    }
    if (thePet.service == "") {
        validation = false;
        inputService.classList.add("alert-error");
    }




    return validation;

}


function register() {
    console.log(inputownerName.value, inputeMail.value, inputPhone.value, inputName.value, inputAge.value, inputType.value, inputGender.value, inputBreed.value, inputTemperament.value, inputService.value);

    let newPet = new Pet(inputownerName.value, inputeMail.value, inputPhone.value, inputName.value, inputAge.value, inputType.value, inputGender.value, inputBreed.value, inputTemperament.value, inputService.value);

    if (validatePet(newPet) == true) {
        PetsRus.pets.push(newPet);
        console.log(newPet);
        console.log(PetsRus.pets);
        displayInfo();
        // displayPetCards();
        clearForm();
    } else {
        alert("Please correct the form and try again");
    }
}
function clearForm() {
    inputownerName.value = "";
    inputeMail.value = "";
    inputPhone.value = "";
    inputName.value = "";
    inputAge.value = "";
    inputType.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputTemperament.value = "";
    inputService.value = "";

}

function deletePet(id) {
    let deleteIndex;
    for (let i = 0; i < PetsRus.pets.length; i++) {
        let pet = PetsRus.pets[i];
        if (id == pet.id) {
            deleteIndex = i;
        }
    }

    document.getElementById(id).remove();
    PetsRus.pets.splice(deleteIndex, 1);
    displayInfo();
}

// function displayInfo() {

//     document.getElementById("info").innerHTML = "you have " + PetsRus.pets.length + " pets registered.";
// }


function init() {
    let Jake = new Pet('guy', 'some@here.com', '1234567890', 'Jake', '13', 'dog', 'male', 'lab', 'calm', 'nails');
    let Ivy = new Pet('guy', 'some@here.com', '1234567890', 'Ivy', '3', 'dog', 'female', 'mix', 'hyper', 'grooming');
    let Penny = new Pet('guy', 'some@here.com', '1234567890', 'Penny', '10', 'dog', 'female', 'Australian Cattle', 'loving', 'check-up');
    PetsRus.pets.push(Jake, Ivy, Penny);
    // displayInfo();
    displayTable();


}
window.onload = init;