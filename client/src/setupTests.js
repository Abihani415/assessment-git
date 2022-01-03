// src/setupTests.js
import { server } from './mocks/server.js'
// import '@testing-library/jest-dom/extend-expect'

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())


const mock =  function() {
	return {
	  observe: jest.fn(),
	  disconnect: jest.fn(),
	};
  };
  
  //--> assign mock directly without jest.fn
  window.IntersectionObserver = mock;
