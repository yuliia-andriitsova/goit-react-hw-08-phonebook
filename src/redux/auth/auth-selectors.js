const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user?.email;

const selectIsLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  selectIsLoggedIn,
  getUserEmail,
};

export default authSelectors;
