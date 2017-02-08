export default (state = [], action) => {
  switch(action.type) {
    case "ADD_TWEET":
      state = state.concat(action.payload)
      return state
    case "CHANGE_NAME":
      state = state.map((tweet) => {
        if(tweet.username == action.payload) {
          tweet.isMine = true
        }
        else {
          tweet.isMine = false
        }
        return tweet
      })
      return state
  }
  return state
}