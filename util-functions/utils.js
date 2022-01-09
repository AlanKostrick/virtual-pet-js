
export const displayPetStats = (elem, obj) => {
  elem.innerText = 'Name: ' + obj.name +
    ' Description: ' + obj.desc + ' Hunger: ' + obj.hunger +
    ' Thirst: ' + obj.thirst;
}

export const createActionButton = (parentElem, childElem, text) => {
  childElem.innerText = text;
  parentElem.appendChild(childElem);
}