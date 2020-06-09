function setToken(Token) {
    if (Token) {
      localStorage.setItem('Token', Token);
    } else {
      localStorage.removeItem('Token');
    }
  }
  
  function getToken() {
    let Token = localStorage.getItem('Token');
    if (Token) {
      // Check if expired, remove if it is
      const payload = JSON.parse(atob(Token.split('.')[1]));
      // JWT's exp is expressed in seconds, not milliseconds, so convert
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('Token');
        Token = null;
      }
    }
    return Token;
  }
  
  function getUserFromToken() {
    const Token = getToken();
    return Token ? JSON.parse(atob(Token.split('.')[1])).user : null;
  }
  
  function removeToken() {
    localStorage.removeItem('token');
  }
  
  export default {
    setToken,
    getToken,
    removeToken,
    getUserFromToken
  };