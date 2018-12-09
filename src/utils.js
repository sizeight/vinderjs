/*
 * Return the CSRF token.
 */
export function getCSRFToken() {
  const CSRFToken = document.cookie.match(/csrftoken=(.*?)(?:$|;)/)[1];
  return CSRFToken;
}

/*
 * Check the status of the fetch response passed and take appropriate action depending on response
 * status.
 */
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  if (error.response.status === 400) {
    // 400 Bad Request
    error.notificationId = '400_BAD_REQUEST';
  } else if (error.response.status === 403) {
    // 403 Forbidden
    error.notificationId = '403_FFORBIDDEN';
  } else if (error.response.status === 404) {
    // 404 Not Found
    error.notificationId = '404_NOT_FOUND ';
  } else {
    error.notificationId = `${error.response.status}_UNEXPECTED_RESPONSE`;
  }

  error.errorLogInfo = {
    status: error.response.status, // e.g. 404
    url: error.response.url, // e.g. http://grid.easydata.co.za/api/v1/selections/2409/?detail=l
    msg: error.response.statusText, // e.g. Not Found
  };

  // If the response has a message we attach it as well.
  return error.response.json()
    .then((jsonResponse) => {
      // Django Rest Framework error responses contain a "detail" key in the body.
      // Our error responses contain a "err" key in the body.
      error.errorLogInfo.detail = jsonResponse.detail;
      error.errorLogInfo.jsonResponse = jsonResponse;
      throw error;
    })
    .catch(() => {
      throw error;
    });
}

/*
 * Return the JSON in a fetch response, throw an error if the response is not valid JSON.
 */
export function parseJSON(response) {
  return response.json()
    .catch((err) => {
      const error = new Error(response.statusText);
      error.response = response;

      error.notificationId = 'INVALID_JSON_RESPONSE';
      error.errorLogInfo = {
        status: error.response.status,
        url: error.response.url,
        msg: `${err.name}: ${err.message}`,
      };

      throw error;
    });
}

/* TODO: Test
 * Return true if the object is up to date.
 */
export function upToDate(obj) {
  // TODO: check the age of object is fresh
  return obj && !obj.isFetching && !obj.didInvalidate && obj.lastUpdated !== undefined;
}

/* TODO: Test
 * Return true if the object is up to date, even if a new object is busy being fetched.
 */
export const upToDateButFetching = (obj) => {
  return obj && !obj.didInvalidate && obj.lastUpdated !== undefined;
};
