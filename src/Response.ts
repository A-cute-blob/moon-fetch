import * as http from 'http';
import { OutgoingHttpHeaders } from 'http';
import Error from './error';

interface Options {
  headers?: OutgoingHttpHeaders;
}

interface O2 {
  headers?: OutgoingHttpHeaders;
  body?: object;
}
interface OptionsWithBody extends Options {
  body?: object;
}
/**
 * @class moonfetch
 */
export class Moonfetch {
  /**
   * @param url string The URL to get the response from
   * @param options object The options
   * @returns res The response
   */
  static async get(url: string, options: Options): Promise<object> {
    const requestOptions = {
      method: 'GET',
      headers: options.headers || { 'Module': 'Moon-fetch' },
    };
    return new Promise<object>((resolve, reject) => {
      const req = http.request(url, requestOptions, (res) => {
        let response = '';
        res.on('data', (chunk) => {
          response += chunk;
        });
        res.on('end', () => {
          resolve({
            ...res,
            data: response,
            body: undefined,
          });
        });
      });

      req.on('error', (error) => {
        reject(new Error(error.message));
      });

      req.end();
    });
  }

  /**
   * @param url string The URL to post the response to
   * @param options object The options
   * @returns res The response
   */
  static async post(url: string, options: O2): Promise<object> {
    const requestOptions = {
      method: 'POST',
      headers: options.headers || { 'Module': 'Moon-fetch' },
    };
    return new Promise<object>((resolve, reject) => {
      const req = http.request(url, requestOptions, (res) => {
        let response = '';
        res.on('data', (chunk) => {
          response += chunk;
        });
        res.on('end', () => {
          resolve({
            ...res,
            data: response,
            body: undefined,
          });
        });
      });

      req.on('error', (error) => {
        reject(new Error(error.message));
      });

      if (options.body) {
        req.write(JSON.stringify(options.body));
      }

      req.end();
    });
  }

  // Implement the other HTTP methods (PUT, PATCH, DELETE) in a similar way



  /**
   * @param url string The url to get response from
   * @param options object The options
   * @returns res The response
   */
  static async put(url: string, options: OptionsWithBody): Promise<object> {
    const requestOptions = {
      method: 'PUT',
      headers: options.headers || { 'Module': 'Moon-fetch' },
    };
    return new Promise<object>((resolve, reject) => {
      const req = http.request(url, requestOptions, (res) => {
        let response = '';
        res.on('data', (chunk) => {
          response += chunk;
        });
        res.on('end', () => {
          resolve({
            ...res,
            data: response,
            body: undefined,
          });
        });
      });

      req.on('error', (error) => {
        reject(new Error(error.message));
      });

      if (options.body) {
        req.write(JSON.stringify(options.body));
      }

      req.end();
    });
  }
  /**
   * @param url string The url to patch response from
   * @param options object The options
   * @returns res The response
   */
  static async patch(url: string, options: OptionsWithBody): Promise<object> {
    const requestOptions = {
      method: 'PATCH',
      headers: options.headers || { 'Module': 'Moon-fetch' },
    };
    return new Promise<object>((resolve, reject) => {
      const req = http.request(url, requestOptions, (res) => {
        let response = '';
        res.on('data', (chunk) => {
          response += chunk;
        });
        res.on('end', () => {
          resolve({
            ...res,
            data: response,
            body: undefined,
          });
        });
      });

      req.on('error', (error) => {
        reject(new Error(error.message));
      });

      if (options.body) {
        req.write(JSON.stringify(options.body));
      }

      req.end();
    });
  }
  /**
   * @param url string The url to delete from
   * @param options object The options
   * @returns res The response
   */
  static async delete(url: string, options: Options): Promise<object> {
    const requestOptions = {
      method: 'DELETE',
      headers: options.headers || { 'Module': 'Moon-fetch' },
    };
    return new Promise<object>((resolve, reject) => {
      const req = http.request(url, requestOptions, (res) => {
        let response = '';
        res.on('data', (chunk) => {
          response += chunk;
        });
        res.on('end', () => {
          resolve({
            ...res,
            data: response,
            body: undefined,
          });
        });
      });

      req.on('error', (error) => {
        reject(new Error(error.message));
      });

      req.end();
    });
  }
}