import GameSavingLoader from '../app';

test('await', async () => {
  const x = await GameSavingLoader.load();
  expect(x).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
test('error', async () => {
  expect.assertions(1);

  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toEqual({ error: 'Что то не так!' });
  }
});
