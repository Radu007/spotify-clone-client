import React, { useEffect } from 'react'

import './App.css'

import Login from './components/login/Login'
import { getTokenFromUrl } from './utils/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/player/Player'
import { useDataLayerValue } from './ContextAPI/DataLayer'

const sp = new SpotifyWebApi()

function App() {
  const [{ token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''

    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      sp.setAccessToken(_token)
      sp.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      sp.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        })
      })

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: sp,
      })

      sp.getPlaylist('37i9dQZEVXcMmYrpplqelu').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })

      sp.getMyTopArtists().then((response) => {
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response,
        })
      })
    }
  }, [token, dispatch])
  return (
    <div className='app'>{token ? <Player spotify={sp} /> : <Login />}</div>
  )
}

export default App
