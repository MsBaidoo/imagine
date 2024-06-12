const btn = document.getElementById('btn');
       btn.onclick =function() {
        const name = prompt('Enter your full name');
        document.getElementById('name').innerText = name;
       }

    // Variables
    const pi = 3.142;
    let username = 'mseve';
    let age = 18;
    let present = false;
    
    // objects
    const person = {
        username: 'mseve',
        age: 18,
        present: false,
        child: {
            name: 'ruthie',
            friend: {
                name: 'monica',
            }
        }
       
            
        }
    

    console.log(person.username)
    person.age = 105;
    console.log(person);

    // Arrays 
const bottle1 = {
    size: 'large' ,
    color: 'yellow'
  }
  
  const bottle2 = {
    size: 'small' ,
    color: 'blue'
  }
  
  
  const bottles = [bottle1,bottle2];
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[1].color;
  
  const date = new Date();
  date.toString()
  date.getFullYear(); 
  
  // If/Else
//   const age = 19;
  if (age >= 18) {
    'You are true'
  } else {
    'You are false';
  }
  
  // For loop
  for (let i =0;  i <= 500 ; i+=1) {
    console. log('We did it!', i);
  }

  // Basic Arithmetic Operation
  40+2;
  30-5;
  6*4;
  50/5;
  5%2;

  // Math Functions
  
Math.round(5.67)
Math.floor(5.67)
Math.max (0, 150, 20, -8, -200)
Math.random ()

// Strings in Javescript
// concatenation
const firstname = "Evelyn";
const surname = "Baidoo";
const middlename = "Yaa";

firstname + ' '+ middlename + ' '+ surname;

// Template Literal
`${firstname} ${middlename} ${lastname}`;


// String Method
// Length method
let fullName = 'Evelyn Yaa Baidoo'
fullName.length

fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(7)
fullName.slice(0,6) 

// count from 0 and exclusive of the last number/letter selected.
fullName.split('')
fullName.replace('Yaa', 'Aba')
fullName.indexOf('doo')


// string
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
let amount = 40000
amount.toString()
console.log(`GHS ${amount}`)


  
// Arrays in Javascript
// write a function that will add a participant to our Google Classroom

const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (email=== undefined || email === null) {
    return 'No email provided'
  }
  // check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided';
  }
  //  Add email to participants
  participants.push(email);
  return 'Participant added';
}

addParticipant('evelynyaabaidoo@gmail.com');
addParticipant('mseve@icloud.com'); 
participants; 


// Arrays in Javascript
const users = [
  {
    username: 'mseve',
    password: '2468',
    email: 'msevebusiness@gmail.com'
  },
  {
    username: 'mseve24',
    password: '1468',
    email: 'msbaidoo@yahoo.com'
  }
]


  
function fullname(user) {
  // return 'Richlove Boye';
  // return user.firstname + ' ' + user.lastname
return {
  ...user,
  fullname:`${user.firstname} ${user.lastname}` 

}
}

const user = {
  firstname: 'Kofi',
  lastname: 'Gyan'
}

fullname(users);

// Array map
const Users = [
  {firstname: 'Kofi', lastname:'Gyan'},
  {firstname: 'Elorm', lastname:'Ajo'},
  {firstname: 'Richmond', lastname:'Bade'},
  {firstname: 'Calvin', lastname:'Clen'},
  {firstname: 'Rose', lastname:'Boi'},
  {firstname: 'Aku', lastname:'Sika'},
]

// Users.map(fullname);

// Square of numbers
function square(number) {
  return number**2;
}
square(2);
const numbers = [6,7,8,9];
numbers.map(square);

// Array filter
function iseven(number) {
  return number % 2 === 1;
}
iseven(9)
numbers.filter(iseven )
 
// write a function that will allow a user to reset their password

// const user = {
//   email: "mseve@icloud.com",
//   password: '1234'
// }


 function resetPassword(email, newPassword) {
//  Check if email and new password was provided

  if (!email || !newPassword) {
    return "Email or password not provided";
  }
  // Check if provided email is correct
  if (email === user.email) {
      // Update password with new one
  user.password = newPassword;
  return "Password reset successful";
    
  }
   if (email !== user.email) {
  return "Invalid email";
}
 }
 

user;
resetPassword("mseve@icloud.com",'0987');
user;  



