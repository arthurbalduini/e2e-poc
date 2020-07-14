import { HttpClient } from './http-client-utils';

/**
 * Handle error.
 *
 * @param {Object} error - Error
 * @returns {undefined}
 */
export const handleError = error => {
  throw error;
};

/**
 * Web Server HTTP client
 *
 * @type {Object}
 */
export const httpClientWeb = new HttpClient("http://localhost:3007/email", handleError);
