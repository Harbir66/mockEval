export const BACKEND_URL = 'http://localhost:8080';

export const GET_ALL_RECORDS = {
  url: 'api/records',
  method: 'GET',
};

export const GET_LIKES = (songId) => ({
  url: `api/records/${songId}/likes`,
  method: 'GET',
});

export const UPDATE_LIKES = (songId) => ({
  url: `api/records/${songId}/likes`,
  method: 'PATCH',
});
