export const initialState = {
  token: null,
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // 'BQDnLsXKrQhazBZlm2UrtSIOhPlBQuSlsaNlTYELX0gr59cTM9…LpUkFdOc0-wYonYd8LLOrztGVW-j42pUmNyrawsSliCQFxNH7',
}

const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.token }
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists }
    case 'SET_SPOTIFY':
      return { ...state, spotify: action.spotify }
    case 'SET_DISCOVER_WEEKLY':
      return { ...state, discover_weekly: action.discover_weekly }
    case 'SET_TOP_ARTISTS':
      return { ...state, top_artists: action.top_artists }
    case 'SET_PLAYING':
      return { ...state, playing: action.playing }
    case 'SET_ITEM':
      return { ...state, item: action.item }
    default:
      return state
  }
}

export default reducer
