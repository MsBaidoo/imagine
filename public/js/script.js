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


  
  




