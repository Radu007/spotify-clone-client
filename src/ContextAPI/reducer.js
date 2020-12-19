export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  token: null
  //   'BQDnLsXKrQhazBZlm2UrtSIOhPlBQuSlsaNlTYELX0gr59cTM9…LpUkFdOc0-wYonYd8LLOrztGVW-j42pUmNyrawsSliCQFxNH7',
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'SET_TOKEN':
      return { ...state, token: action.token }
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists }
    default:
      return state
  }
}

export default reducer
