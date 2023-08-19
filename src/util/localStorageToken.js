class localStorageToken {
  static getToken = (tokenId) => localStorage.getItem(tokenId);
  static setToken = (tokenId, tokenValue) =>
    localStorage.setItem(tokenId, tokenValue);
  static removeToken = (tokenId) => localStorage.removeItem(tokenId);
}

export default localStorageToken;
