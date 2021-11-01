export const state = () => ({
  auth: {
    user:null,
    loggedIn:false
  }
})


export const getters = {
  isAuthenticated : state => {
    return state.auth.loggedIn
  },
  getUserInfo : state => {
    return state.auth.user
  }
};

export const mutations = {
  set_user: (state, user) => {
    state.auth.user = user;
    state.auth.loggedIn = true;
  }
}


