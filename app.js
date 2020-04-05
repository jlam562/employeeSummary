const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
const handlbars = require('handlebars')
const Employee = require('./employees/Manager.js')
const Engineer = require('./employees/Engineer.js')
const Intern = require('./employees/Intern.js')

let employees = []

const empQuestions = [
  'What is your name?:',
  'What is your ID?:',
  'What is your email?:',
  'What is your GitHub username?:',
  'What school do you go to?:'
]

const mngrQuestions = [
  'What is your name?:',
  'What is your ID?:',
  'What is your email?:',
  'What is your office number?:',
  'How many employees do you have?:',
  'How many interns do you have?:'
]

async function getEmp() {
  await prompt([
    {
      type: 'input',
      name: 'empName',
      message: empQuestions[0]
    },
    {
      type: 'input',
      name: 'empId',
      message: empQuestions[1]
    },
    {
      type: 'input',
      name: 'empEmail',
      message: empQuestions[2]
    },
    {
      type: 'input',
      name: 'github',
      message: empQuestions[3]
    }
  ])
  .then(response =>{
    employees.push(new Engineer(
      response.empName,
      response.empId,
      response.empEmail,
      response.github
    ))
  })
  .catch(e => console.error(e))
}

async function getInt() {
  await prompt([
    {
      type: 'input',
      name: 'intName',
      message: empQuestions[0]
    },
    {
      type: 'input',
      name: 'intId',
      message: empQuestions[1]
    },
    {
      type: 'input',
      name: 'intEmail',
      message: empQuestions[2]
    },
    {
      type: 'input',
      name: 'school',
      message: empQuestions[4]
    }
  ])
    .then(response => {
      employees.push(new Intern(
        response.intName,
        response.intId,
        response.intEmail,
        response.school
      ))
    })
    .catch(e => console.error(e))
}

async function getManager() {
  await prompt([
    {
      type: 'input',
      name: 'mngrName',
      message: mngrQuestions[0]
    },
    {
      type: 'input',
      name: 'mngrId',
      message: mngrQuestions[1]
    },
    {
      type: 'input',
      name: 'mngrEmail',
      message: mngrQuestions[2]
    },
    {
      type: 'input',
      name: 'office',
      message: mngrQuestions[3]
    },
    {
      type: 'input',
      name: 'empNum',
      message: mngrQuestions[4]
    },
    {
      type: 'input',
      name: 'intNum',
      message: mngrQuestions[5]
    }
  ])
    .then(response => {
      employees.push(new Manager(
        response.mngrName,
        response.mngrId,
        response.mngrmail,
        response.office,
        response.empNum,
        response.intNum
      ))
    })
    .catch(e => console.error(e))
}