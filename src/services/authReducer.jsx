// const user = AuthService.getCurrentUser()
export const initialState = {
  isAuthenticated: false,
}
// user !== null
//   ? {
//       isAuthenticated: true,
//     }
//   : {
//       isAuthenticated: false,
//       // currentUser: null,
//     }

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        // currentUser: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
      }

    default:
      return state
  }
}
