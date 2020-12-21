import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'

import { useDataLayerValue } from '../../ContextAPI/DataLayer'

function Header() {
  const [{ user }, dispatch] = useDataLayerValue()
  console.log(user)
  return (
    <div className='header'>
      <div className='header__left'>
        <SearchIcon />
        <input
          className='input'
          type='text'
          placeholder='Search for Artists, Songs, or podcasts'
        />
      </div>
      <div className='header__right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
