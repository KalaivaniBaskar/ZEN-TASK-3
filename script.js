// Question 1 : For a given JSON, iterate over all for loops (for, for in, for of, forEach)

var favourites = {
   "color":"blue",
   "fruit":"mango",
   "vegetable":"carrot",
   "meal":"curd rice",
   "breakfast":"idli",
   "snack":"sandwich",
   "dessert":"basundhi",
   "feast":"prawn biryani",
   "season":"spring",
   "hangout":"beach",
   "movie":"In this corner of the World",
   "song":"This is me",
   "anime":"To your eternity",
   "language":"Japanese",
   "series":"Dark",
   "kdrama":"Our Blues",
   "subject":"English",
   "dress":"Saree",
   "comfortwear":"Jacket and trackpants",
   "toVisit":[
      "Japan",
      "Maldives",
      "Ooty"
   ]
}
console.log("1. Using for loop");
var objKey = Object.keys(favourites);
console.log("Iterating through keys of obj", objKey );
for(let i = 0; i < objKey.length; i++){
    console.log(`${i+1}. My favourite ${objKey[i]} is ${favourites[objKey[i]]}`);
}

console.log("2. Using for.. in loop"); 
// for ..in loops through the properties of an Object, no need to extract keys of an object separately
// It iterates through every key of object
for( let property in favourites){ 
    console.log(`Key is ${property} :forin:  value is ${favourites[property]}`);
}

console.log("3. Using for..of loop"); 
console.log("Iterating through keys of obj", objKey );
for( let element of objKey){
    console.log(`Key is ${element} :forof:  value is ${favourites[element]}`);
}

console.log("4. Using forEach() method"); 
console.log("Iterating through keys of obj", objKey );
objKey.forEach( key => console.log(`Key is ${key} :forEach:  value is ${favourites[key]}`));

// Output : refer screenshot attached

// // Question 2 : Create resume data in JSON format 
// JSON cannot contain functions like Javascript objects.
var resume = {
    "name":"Kalaivani",
    "firstName":"Kalaivani",
    "lastName":"Baskar",
    "age":31,
    "email":"kalaivani.working@gmail.com",
    "phoneNumber":"+91 9952027757",
    "address":{
       "door":"6 B",
       "street":"Krishna Nagar",
       "area":"MMC",
       "city":"Chennai",
       "state":"TamilNadu",
       "pincode":"600051"
    },
    "qualification":[
       {
          "name":"SSLC",
          "yearPassed":"2006",
          "percentage":86,
          "board":"Matriculation",
          "stream":"all",
          "institution":"Alagappa Matric HSS school"
       },
       {
          "name":"Higher Secondary",
          "yearPassed":"2008",
          "percentage":94,
          "board":"TamilNadu StateBoard",
          "stream":"Maths, Computer Science, Physics, Chemistry",
          "institution":"Velammal Matric HSS school"
       },
       {
          "name":"Bachelor of Engineering - UG",
          "yearPassed":"2012",
          "percentage":72,
          "board":"Anna University",
          "stream":"Electronics and Commu",
          "institution":"Jaya Engineering College"
       }
    ],
    "languagesKnown":[
       "Tamil",
       "English",
       "Hindi"
    ],
    "softwareSkills":[
       "C",
       "C++",
       "Java",
       "Javascript",
       "HTML",
       "CSS",
       "Web Development",
       "COBOL",
       "JCL",
       "SQL",
       "MS Office"
    ],
    "certification":[
       [
          "Full Stack Web development",
          "GUVI"
       ],
       [
          "English Impact Course",
          "British Council, Chennai"
       ],
       [
          "High Power Transmitters",
          "All India Radio"
       ],
       [
          "Industrial Visit",
          "BSNL, Maraimalai Nagar"
       ]
    ],
    "skillHighlight":[
       "Full stack developer",
       "mainframe",
       "Problem Solver",
       "Good learner",
       "service-focussed",
       "Analytical skills"
    ],
    "experienceYears":2,
    "experienceDetails":{
       "company":"Infosys Limited",
       "jobTitle":"Systems Engineer",
       "yearsWorked":"2013 to 2015",
       "duration":2,
       "domain":"Mainframe",
       "projectDetails":"BNSF Railway - Backend maintenance",
       "responsibility":[
          "mainframe application maintenance",
          "COBOL program analysis and improvement",
          "root cause analysis for mainframe JOB failures",
          " improve effieciency as per requirement",
          "Batch processing"
       ]
    },
    "interestAreas":[
       "Python",
       "Java",
       "Web application development"
    ]
 }

 console.log("Resume in JSON format");
 console.log(resume);

// Output: Raj Kalai Hitesh 
