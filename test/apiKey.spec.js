// Importing ApiStorage.js functions
import { getApiKey, setApiKey, deleteApiKey } from "./../src/lib/apiStorage.js";

// getApiKey() test
describe("getApiKey", () => {
  it("should return null if API key is not set", () => {
    expect(getApiKey()).toBeNull();
  });
  it("should return the API key if it is set", () => {
    const apiKey = "test-ApiKey1234";
    localStorage.setItem("apiKey", apiKey);
    expect(getApiKey()).toEqual(apiKey);
  });
});

// setApiKey() test
describe("setApiKey", () => {
  it("should return API key is not saved", () => {
    const apiKey = "";
    setApiKey(apiKey);
    expect(getApiKey(apiKey)).toBeFalsy();
  });

  it("should save the API key in localStorage", () => {
    const apiKey = "test-ApiKey1234";
    setApiKey(apiKey);
    localStorage.setItem("apiKey", apiKey);
    const getValue = getApiKey("apiKey");
    expect(getValue).toEqual(apiKey);
  });
});

// deleteApiKey() test
describe("deleteApiKey", () => {
  it("Should delete the API Key saved in local storage", () => {
    const apiKey = "test-deleteApi1234";
    const testDelete = deleteApiKey(apiKey);
    const result = localStorage.removeItem("apiKey");
    expect(result).toBe(testDelete);
  });
});

