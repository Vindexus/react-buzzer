import axios from 'axios'

export function fetchUsers () {
  return {
    type: 'FETCH_USERS',
    payload: axios.get("http://rest.learncode.academy/api/Vindexus/users")
  }
}

export function addUser (user) {
  return {
    type: 'ADD_USER',
    payload: axios.post("http://rest.learncode.academy/api/Vindexus/users", user)
  }
}