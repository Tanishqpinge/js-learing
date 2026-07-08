// const person = {
//   name: "Tanishq",
//   greet: function() {
//     console.log(this.name);
//   }
// }

// person.greet();


// Object with normal value
// const person = {
//   name: "Tanishq"    // key: value
// }

// Object with function
const person = {
  greet: function() { // key: function
    console.log("hello");
  }
}

person.greet()