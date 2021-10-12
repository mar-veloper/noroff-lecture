const person = {
  name: 'Cameron',
  age: 45,
  address: {
    city: 'Oslo',
    street: 'Anauthorized 401 ',
    postalCode: 1337,
  },
};

// let result;

// if (person.name !== 'Cameron') {
//   result = 'This person is born beautiful';
// } else if (person.name === 'Cameron' && person.age > 25) {
//   result = "This is old and it's Cameron";
// } else {
//   result = 'No comment';
// }

const result =
  person.name !== 'Cameron' ? 'This person is born beautiful' : 'No comment';

// const result =
//   person.name !== 'Cameron'
//     ? 'This person is born beautiful'
//     : person.name === 'Cameron' && person.age > 25
//     ? "This is old and it's Cameron"
//     : 'No comment';

// true ? function1() : function2();

// console.log(result);
