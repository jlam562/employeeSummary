const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
const handlbars = require('handlebars')
const Employee = require('./employees/Manager.js')
const Engineer = require('./employees/Engineer.js')
const Intern = require('./employees/Intern.js')

let employees = []

