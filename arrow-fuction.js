var names = ['Seb', 'Roman', 'Karol'];

// names.forEach(function(name){
//     console.log(name);
// });

// names.forEach((name) => console.log(name, "arrow"));


// var returnName = (name) => name + '!';

// console.log(returnName('Roman'));

// var person = {
//     name: 'Roman',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + 'say hi to' + name);
//         })
//     }
// };

// person.greet();

function add (a, b) {
    return a + b;
}

var addStatment = (a, b) => a + b;
var addExpression = (a, b) => {
    return a + b;
};

console.log(addStatment(1, 3));
console.log(addExpression(1, 7));