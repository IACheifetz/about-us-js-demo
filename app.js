// import functions
import { people } from './data.js';
//console.log(people, 'people');

// grab DOM elements
const selectEl = document.querySelector('.select');
const contain = document.querySelector('.contain');
const nameEl = document.getElementById('name');
const pronounsEl = document.querySelector('.pronouns');
const favPlaceEl = document.querySelector('.favorite_place');
const hobbiesEl = document.querySelector('.hobbies');


// const selectEl = document.querySelector('.select');
// const nameEl = document.querySelector('h4');
// const ageEl = document.querySelector('p');
// const hobbiesEl = document.querySelector('ul');
// const bioEl = document.querySelector('span');
// const contain = document.querySelector('div');

// set event listeners 
selectEl.addEventListener('change', (event) => {
    console.log('user click');
    const selected = event.target.value;
    
    hobbiesEl.innerHTML = '';
    contain.classList.remove('Khayman', 'Ian');

    if (selected === 'one') {
        renderPerson(0);
    } else {
        renderPerson(1);
    }

});


    // get user input
function renderPerson(index) {
    contain.classList.add(`${people[index].name}`);
    nameEl.textContent = 'Name: ' + people[index].name;
    pronounsEl.textContent = 'Pronouns: ' + people[index].pronouns;
    favPlaceEl.textContent = 'Favorite Place: ' + people[index].favorite_place;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}




console.log(pronounsEl);
    // use user input to update state 

    // update DOM to reflect the new state
