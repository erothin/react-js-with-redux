/**
 * Wrapper function above Axios lib
 * @author Chintan Prajapati<chintanprajapati37@gmail.com>
 */
import { API_URL } from '../../config';
const axios = require('axios');
/* Set base url for api */
axios.defaults.baseURL = API_URL;

const CancelToken = axios.CancelToken;
let source = CancelToken.source();
/* Set common header parameters */

axios.defaults.headers.common = {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json; charset=utf-8'
};

/**
 * Set header authorization
 * @param token     Authorization token
 */
export const setHeaderAuthorization = (token) => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
};

/**
 * Cancel all request
 */
export const cancelAllRequest = () => {
    source.cancel();
    setTimeout(() => {
        source = CancelToken.source();
    }, 1500);
};

/**
 * Handle Axios response
 * @param res   HTTP Response
 * @returns     Return data
 */
export const getResponse = (res) => {
    if (res && (res.status === 200 || res.status === 201 || res.status === 204)) {
        if (res.status === 201 || res.status === 204) {
            res.data = true;
        }
        return res.data;
    }
    throw new Error('Some error occur');
};

/**
 * Get request
 * @param path      API url path
 * @param params    Request parameters
 * @param headers   Request headers
 */
export const get = (path, params, headers) => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(path, { params }, { headers })
                .then(getResponse)
                .then(resolve)
                .catch(reject);
        } catch (error) {
            reject(error);
        }
    });
};

/**
 * Post request
 * @param path      API url path
 * @param params    Request parameters
 * @param headers   Request headers
 */
export const post = (path, params, headers) => {
    return new Promise((resolve, reject) => {
        try {
            axios
                .post(path, params || {}, { headers })
                .then(getResponse)
                .then(resolve)
                .catch(reject);
        } catch (error) {
            reject(error);
        }
    });
};

/**
 * Put request
 * @param path      API url path
 * @param params    Request parameters
 * @param headers   Request headers
 */
export const put = (path, params, headers) => {
    return new Promise((resolve, reject) => {
        try {
            axios
                .put(path, params || {}, { headers })
                .then(getResponse)
                .then(resolve)
                .catch(reject);
        } catch (error) {
            reject(error);
        }
    });
};

export const remove = (path, params, headers) => {
    return new Promise((resolve, reject) => {
        try {
            axios
                .delete(path, { data: params }, { headers })
                .then(getResponse)
                .then(resolve)
                .catch(reject);
        } catch (error) {
            reject(error);
        }
    });
};
