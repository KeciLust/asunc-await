import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const saving = await json(buffer);

      return saving;
    } catch {
      return new Error('Что то не так!');
    }
  }
}
