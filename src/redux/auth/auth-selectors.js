const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const selectIsLoggedIn = state => state.auth.isLoggedIn;

// const selectUsers = state => state.auth.user;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  selectIsLoggedIn,
};

export default authSelectors;
