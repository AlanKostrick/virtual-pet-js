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
    petInfoPara.innerText = 'Name: ' + createdPet.name +
      ' Description: ' + createdPet.desc + ' Hunger: ' + createdPet.hunger +
      ' Thirst: ' + createdPet.thirst;

    const feedBtn = document.createElement('button');
    feedBtn.innerText = 'feed';

    const waterBtn = document.createElement('button');
    waterBtn.innerText = 'water';

    createdPetSection.appendChild(petInfoPara);
    createdPetSection.appendChild(feedBtn);
    createdPetSection.appendChild(waterBtn);

    myPetsDiv.appendChild(createdPetSection);

    feedBtn.addEventListener('click', () => {
      createdPet.feed();
      if (createdPet.thirst >= 80) {
        alert(createdPet.name + ' is thirsty!');
      }
      petInfoPara.innerText = 'Name: ' + createdPet.name +
        ' Description: ' + createdPet.desc + ' Hunger: ' + createdPet.hunger +
        ' Thirst: ' + createdPet.thirst;
    });

    waterBtn.addEventListener('click', () => {
      createdPet.water();
      petInfoPara.innerText = 'Name: ' + createdPet.name +
        ' Description: ' + createdPet.desc + ' Hunger: ' + createdPet.hunger +
        ' Thirst: ' + createdPet.thirst;
    });

  });

}