import { createActionButton, displayPetStats } from './util-functions/utils';

import VirtualPet from './virtual-pet';

const myPetsDiv = document.querySelector('#myPets');

renderPage();

function renderPage() {
  addAPet();
}

function addAPet() {
  const createBtn = document.querySelector('#submit');
  const nameInput = document.querySelector('#name');
  const descInput = document.querySelector('#description');

  createBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const description = descInput.value;

    const createdPet = new VirtualPet(name, description, 50, 50);

    const createdPetSection = document.createElement('section');
    const petInfoPara = document.createElement('p');

    displayPetStats(petInfoPara, createdPet);

    const feedBtn = document.createElement('button');
    const waterBtn = document.createElement('button');
    createActionButton(createdPetSection, feedBtn, 'feed');
    createActionButton(createdPetSection, waterBtn, 'water');

    createdPetSection.appendChild(petInfoPara);

    myPetsDiv.appendChild(createdPetSection);

    feedBtn.addEventListener('click', () => {
      createdPet.feed();
      if (createdPet.thirst >= 80) {
        alert(createdPet.name + ' is thirsty!');
      }
      displayPetStats(petInfoPara, createdPet);
    });

    waterBtn.addEventListener('click', () => {
      createdPet.water();
      displayPetStats(petInfoPara, createdPet);
    });

  });

}