// local
const API_PREFIX = "http://localhost:3000";
// deploy

export const getMostWanted = () => {
  return fetch(`${API_PREFIX}/api/games/most-wanted`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("request failed");
    }
  });
};
export const getMostCollected = () => {
  return fetch(`${API_PREFIX}/api/games/most-collected`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("request failed");
    }
  });
};
export const login = (userObj) => {
  return fetch(`${API_PREFIX}/api/users/login`, {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("request failed");
    }
  });
};
export const fromToken = (token) => {
  return fetch(`${API_PREFIX}/api/users/fromtoken`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("request failed");
    }
  });
};

export const addToCollection = (token, gameId) => {
  return fetch(`${API_PREFIX}/api/collections`, {
    method: "POST",
    body: JSON.stringify({
      GameId: gameId,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("request failed");
    }
  });
};
export const removeFromCollection = (token, gameId) => {
  return fetch(`${API_PREFIX}/api/collections/${gameId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("request failed");
    }
  });
};
export const addToWishlist = (token, gameId) => {
  return fetch(`${API_PREFIX}/api/wishlists`, {
    method: "POST",
    body: JSON.stringify({
      GameId: gameId,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("request failed");
    }
  });
};
export const removeFromWishlist = (token, gameId) => {
  return fetch(`${API_PREFIX}/api/wishlists/${gameId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("request failed");
    }
  });
};
