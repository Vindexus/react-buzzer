export default (state = {}, action) => {
  switch(action.type) {
    case "FETCH_USERS_PENDING":
      return {...state, loading: true}
    case "FETCH_USERS_FULFILLED":
      return {...state, loading: false, users: action.payload.data, error: null}
    case "FETCH_USERS_REJECTED":
      return {...state, loading: false, users: [], error: action.payload}
    case "ADD_USER_FULFILLED":
      let users = state.users
      users.push(action.payload.data)
      console.log('new user', action.payload.data)
      return {
        ...state,
        users
      }
    case "CHANGE_NAME":
      return {...state, name: action.payload}
    default:
      return state
  }
}