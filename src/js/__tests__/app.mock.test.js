import GameSavingLoader from '../app';

jest.mock('../reader');

test('error', async () => {
  expect.assertions(1);
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toEqual('Что то не так!');
  }
});
