import { communicateWithOpenAI } from "./../src/lib/openAIApi.js";

describe('communicateWithOpenAI', () => {
  test('communicateWithOpenAI', () => {
    return communicateWithOpenAI().then(data => {
      expect(data).toBe('example');
    });
  });
});