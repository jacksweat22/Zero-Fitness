import token from './Tokens';

const BASE_URL = '/excercises/';

export default {
  index,
  create
};

function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

function create(excercise) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token.getToken()
    },
    body: JSON.stringify(excercise)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

