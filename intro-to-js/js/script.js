/* let width, length, area;
width = 10;
length = 20;
area = width * length
console.log(area)
*/

// console.log("test")

const button = document.getElementById("my-btn");
button.addEventListener("click", function() {
  alert("Button clicked!");
})

let teamMember = {
  firstName: "Naqiuddin",
  lastName: "Kamil",  
  hobbies: ["eating", "gaming"],
  favouriteFood: ["Nasi ayam", "Nasi lemak"],
  pets: ["fera the cat"]
}

console.log(teamMember.firstName);
console.log(teamMember["lastName"]);
console.log(teamMember.hobbies[0]);

