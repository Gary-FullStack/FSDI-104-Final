
// I thied to make this work.  Really, for several days.  Honestly I'm not getting Javascript, 
// its just not sticking with me.   I watch your examples and I study hours and hours of outside content 
// just to struggle with a small example like below.
//  I do NOT want to be spoon fed the materiel, and of course I do not expect to master it  in a few short weeks.
//  I've done things in my life that are expressly complicated but I've never felt like a blank slate like I do 
//  with javascript.   






let petSection = document.getElementById("pets");
let table = "";

function displayTable() {
    for (let i = 0; i < PetsRus.pets.length; i++) {
        let pet = PetsRus.pets[i];

        tr += `
        <tr id="${pet.id}">
            <td>Owner: ${pet.Oname}</td>
          <td>Email: ${pet.Email}</td>
          <td>Name:${pet.name}</td>
          <td>Age: ${pet.age}</td>
          <td>Type: ${pet.type}</td>
          <td>Gender: ${pet.gender}</td>
          <td>Temperament: ${pet.temperament}</td>
          <td>Service: ${pet.service}</td>
          </tr>`
    }

}