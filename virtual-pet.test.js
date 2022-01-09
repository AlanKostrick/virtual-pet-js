import VirtualPet from './virtual-pet';

describe('VirtualPet', () => {

  test('does it return a name', () => {
    const underTest = new VirtualPet('fido');
    expect(typeof underTest.name).toMatch('string');
  });

  test('does it return fido', () => {
    const underTest = new VirtualPet('fido');
    expect(underTest.name).toEqual('fido');
  });

  test('does it return hunger of 45 when fed', () => {
    const underTest = new VirtualPet('fido', 'dog', 50, 50);
    expect(typeof underTest.hunger).toMatch('number');
  });

  test('does it return hunger of 45 when fed', () => {
    const underTest = new VirtualPet('fido', 'dog', 50, 50);
    underTest.feed();
    expect(underTest.hunger).toEqual(45);
  });

  test('does it return thirst of 45 when watered', () => {
    const underTest = new VirtualPet('fido', 'dog', 50, 50);
    underTest.water();
    expect(underTest.thirst).toEqual(45);
  });

});