

// --------------------varibles:
// koi variable declear krnay kay liya variable use hota hia.
// variable theen tarah ke hotay hai ...
// 1.let const var
// var:Ye JavaScript ka purana tariqa hai variables banane ka, lekin ab kam use hota hai.
// Ye function scope follow karta hai.Agar var kisi function ke andar declare kiya jaye, to wo sirf usi function tak limited rahega.
// Agar kisi block ({}) ke andar declare karein, tab bhi wo block ke bahar accessible rahega (kyun ke ye block scope ko nahi maanta).
// Ek hi naam ka variable dobara declare kar sakte hain.


// aik var dobara declear krskte hai
// var x = 10;
// if (true) {
//   var x = 20; // Same variable redeclared
//   console.log(x); // Output: 20
// }
// console.log(x)



// let:Ye block scope follow karta hai, yani {} ke andar declare hone par sirf usi block ke andar accessible hoga.
//  value change kar sakte hain
// ek hi naam ka variable dobara declare nahi hoga.

// let y = 10;
// let age = {
//   let y = 20; // Yeh ek naya `y` hai jo block ke andar hai.
//   console.log(y); // Output: 20
// }
// console.log(y); // Output: 10 (Bahar wala `y`)

const age = 10;
console.log(age);

// const age = 30;
// console.log(age); ya nhi change hoga.


const obj = { name: "Ali" };
obj.name = "Ahmed"; // Allowed (object properties change ho sakti hain)
console.log(obj); // Output: { name: "Ahmed" }