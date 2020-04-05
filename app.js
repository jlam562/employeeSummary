const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
const handlbars = require('handlebars')
const Employee = require('./employees/Manager.js')
const Engineer = require('./employees/Engineer.js')
const Intern = require('./employees/Intern.js')

let employees = []

const employQuestions = [
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