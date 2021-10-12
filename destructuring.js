const student = {
  firstName: 'Stian',
  age: 20,
  eyeColor: 'blue',
  course: 'Frontend Development',
  teachers: ['Cameron', 'Manny'],
  address: {
    city: 'Oslo',
    street: 'Karl Johans gate 13',
    postalCode: 1337,
    country: 'Norway',
  },
};

// const fornavn = student.firstName;
// const lastName = student.lastName;
// const age = student.age;

// const city = student.address.city;
// const country = student.address.country;
// const street = student.address.street;
// const postalCode = student.address.postalCode;

const { firstName: fornavn, lastName, age, eyeColor = 'brown' } = student;
const { city, country, street, postalCode } = student.address;

const bio = `Hi! My name is ${fornavn} ${lastName}, I am ${age}-year-old man from ${street}, 
${city},${country} ${postalCode}`;

const number = [1, 2, 3];

const [a, b, c] = number;

const logStudentName = ({ firstName, lastName = 'Post' }) => {
  console.log(firstName, lastName);
};

logStudentName(student);
