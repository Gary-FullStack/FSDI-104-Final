function displayPetCards() {


    let petSection = document.getElementById("pets");
    let card = "";

    for (let i = 0; i < PetsRus.pets.length; i++) {
        let pet = PetsRus.pets[i];

        card += `
            <div id="${pet.id}" class = "petCard">
            <h4>Owner: ${pet.Oname}</h4>
            <h4>Email: ${pet.Email}</h4>
            <h4>Name: ${pet.name}</h4>
            <p> Age: ${pet.age}</p>
            <p> Type: ${pet.type}</p>
            <p> Gender: ${pet.gender}</p>
            <p> Breed: ${pet.breed}</p>
            <p> Temperament: ${pet.temperament}</p>
            <p> Service: ${pet.service}</p>
            <button onClick="deletePet(${pet.id});">Delete</button>
            </div>`;

        console.log(card);
    }

    petSection.innerHTML = card;
}







// let petSection = document.getElementById("pets");
// let table = "";

// function displayTable() {
//     for (let i = 0; i < PetsRus.pets.length; i++) {
//         let pet = PetsRus.pets[i];

//         table += `
//             <td>Owner: ${pet.Oname}</td>
//           <td>Email: ${pet.Email}</td>
//           <td>Name:${pet.name}</td>
//           <td>Age: ${pet.age}</td>
//           <td>Type: ${pet.type}</td>
//           <td>Gender: ${pet.gender}</td>
//           <td>Temperament: ${pet.temperament}</td>
//           <td>Service: ${pet.service}</td>`
//     }

// }