const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


function generateCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
        const teamArray = team[i];
        switch(teamArray.getRole()) {
            case 'Manager':
                const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
                cards.push(generateManagerCard(manager));
                break;
            case 'Engineer':   
                const manager = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
                cards.push(generateEngineerCard(engineer));
                break; 
            case 'Intern':
                const manager = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
                cards.push(generateInternCard(intern));
                break;

        }
    }
    return cards.json(``)
}
let generateManagerCard = (Manager) => {
    return `
    <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header'>
        <h3 class="card-title">${Manager.getName()}</h3>
        <h6 class="card-text"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Manager.getId()}</li>
            <li class="list-group-item">Email: ${Manager.getEmail()}</li>
            <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
        </ul>
    </div>
    </div>
    `
}

let generateEngineerCard = (Engineer) => {
    return `
    <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header'>
        <h3 class="card-title">${Engineer.getName()}</h3>
        <h6 class="card-text"><i class="fa fa-coffee"></i> ${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Engineer.getId()}</li>
            <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
            <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
        </ul>
    </div>
    </div>
    `
};

let generateEngineerCard = (Intern) => {
    return `
    <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header'>
        <h3 class="card-title">${Intern.getName()}</h3>
        <h6 class="card-text"><i class="fa fa-coffee"></i> ${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Intern.getId()}</li>
            <li class="list-group-item">Email: ${Intern.getEmail()}</li>
            <li class="list-group-item">School: ${Intern.getSchool()}</li>
        </ul>
    </div>
    </div>
    `
}

