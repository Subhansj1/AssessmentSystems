const GET_UNIVERSITIES_URL =
  'http://universities.hipolabs.com/search?country=pakistan';

const get_universities = () => {
  return fetch(GET_UNIVERSITIES_URL)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      return error;
    });
};

export {get_universities};
