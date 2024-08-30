// local
const API_PREFIX = "http://localhost:3000";
// deploy

export const getMostWanted = () => {
  return fetch(`${API_PREFIX}/api/games/most-wanted`).then((res) => res.json());
};
export const getMostCollected = () => {
  return fetch(`${API_PREFIX}/api/games/most-collected`).then((res) =>
    res.json()
  );
};
