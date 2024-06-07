//Question1 My Resumedata in json format

let myResume={
    "basics": {
      "name": "SHARMILA N",
      "email": "sharmi.ami6@gamil.com",
      "phone": 9952325868,
      "degree": "B.E",
      "location": {
        "address": "3/44,Pillaiyar kovil street,viraganoor",
        "postalCode": 625009,
        "city": "Madurai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/rajarajan-t-685958219/",
          "github":"https://github.com/sharmivenky"
        }
      ]
    },
    "work": [
      {
        "company": "SolverMinds",
        "position": "Software Developer",
        "startDate": "2014-06-01",
        "endDate": "2016-12-31",
        "summary": "I was a full stack developer to work on containers and its management",
      },
      {
        "company": "Cuemath",
        "position": "Teacher",
        "startDate": "2020-06-01",
        "endDate": "2021-05-01",
        "summary": "I am a dedicted teacher with full analytical and logical skills to teachthe students",
      },
    ],
    "education": [
      {
        "institution": "KLN College Of Engineering",
        "department": "Electrical And Electronics",
        "studyType": "fulltime",
        "batch start year": 2010,
        "batch end year": 2014,
        "gpa": 8.39,
      },
      {
       "institution":"Prof.S.A.College of Education",
       "department": "Mathematics",
        "studyType": "fulltime",
        "batch start year": 2018,
        "batch end year": 2020,
        "gpa": 8.5,
      }
    ],
    "skills": [
      {
        "name": "c,c++,java,javascript",
        "level": "beginner",
        "project": [
          "automatic attendance maintaing system using java language"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish,Hindi",
      }
    ]
    
  }
  console.log(myResume);

  // question 2 itreating the above resume with for ,for in,for of and for each

  let myResumedata=[{
    "basics": {
      "name": "SHARMILA N",
      "email": "sharmi.ami6@gamil.com",
      "phone": 9952325868,
      "degree": "B.E",
      "location": {
        "address": "3/44,Pillaiyar kovil street,viraganoor",
        "postalCode": 625009,
        "city": "Madurai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/rajarajan-t-685958219/",
          "github":"https://github.com/sharmivenky"
        }
      ]
    },
    "work": [
      {
        "company": "SolverMinds",
        "position": "Software Developer",
        "startDate": "2014-06-01",
        "endDate": "2016-12-31",
        "summary": "I was a full stack developer to work on containers and its management",
      },
      {
        "company": "Cuemath",
        "position": "Teacher",
        "startDate": "2020-06-01",
        "endDate": "2021-05-01",
        "summary": "I am a dedicted teacher with full analytical and logical skills to teachthe students",
      },
    ],
    "education": [
      {
        "institution": "KLN College Of Engineering",
        "department": "Electrical And Electronics",
        "studyType": "fulltime",
        "batch start year": 2010,
        "batch end year": 2014,
        "gpa": 8.39,
      },
      {
       "institution":"Prof.S.A.College of Education",
       "department": "Mathematics",
        "studyType": "fulltime",
        "batch start year": 2018,
        "batch end year": 2020,
        "gpa": 8.5,
      }
    ],
    "skills": [
      {
        "name": "c,c++,java,javascript",
        "level": "beginner",
        "project": [
          "automatic attendance maintaing system using java language"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish,Hindi",
      }
    ]
    
  }]

// FOR Loop
  
  for(var i=0;i<myResumedata.length;i++){
    console.log(myResumedata[i]);
    
    }

// FOR IN Loop

  for (var i in myResumedata){
    console.log(i,myResumedata[i]);
    }

// FOR EACH Loop

    Object.keys(myResumedata).forEach((e)=>{
    console.log(myResumedata[e])
})

// FOR OF Loop

for(let myskills of myResumedata)
  {
      Object.keys(myskills).forEach((e)=>{
          console.log(e, myskills[e])
      })
  

  }

