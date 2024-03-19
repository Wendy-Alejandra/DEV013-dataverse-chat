import { communicateWithOpenAI } from "./../src/lib/openAIApi.js";
import { getApiKey } from "./../src/lib/apiStorage.js";

jest.mock("./../src/lib/apiStorage.js", () => ({
  getApiKey: jest.fn()
}));

describe('communicateWithOpenAI function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data from OpenAI API with correct parameters', async () => {
    const apiKey = 'sk-FAKE-API-KEY'; // Set your API key here
    const cruiseShips = 'ship1, ship2';
    const userMessages = 'User message';

    getApiKey.mockReturnValue(apiKey);

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        choices: [{
          message: {
            content: 'response from OpenAI'
          }
        }]
      })
    }));

    await communicateWithOpenAI(cruiseShips, userMessages);

    expect(fetch).toHaveBeenCalledWith('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a cruise ship: ${cruiseShips}, give short answers`,
          },
          {
            role: "user",
            content: userMessages,
          }
        ]
      })
    });
  });

  it('should return response from OpenAI API', async () => {
    const apiKey = 'your-api-key'; // Set your API key here
    const cruiseShips = 'ship1, ship2';
    const userMessages = 'User message';

    getApiKey.mockReturnValue(apiKey);

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        choices: [{
          message: {
            content: 'response from OpenAI'
          }
        }]
      })
    }));

    const response = await communicateWithOpenAI(cruiseShips, userMessages);

    expect(response).toEqual('response from OpenAI');
  });

  it('should throw error when fetch fails', async () => {
    const apiKey = 'your-api-key'; // Set your API key here
    const cruiseShips = 'ship1, ship2';
    const userMessages = 'User message';
    const error = new Error('Fetch failed');

    getApiKey.mockReturnValue(apiKey);

    global.fetch = jest.fn(() => Promise.reject(error));

    await expect(communicateWithOpenAI(cruiseShips, userMessages)).rejects.toThrow(error);
  });
});
