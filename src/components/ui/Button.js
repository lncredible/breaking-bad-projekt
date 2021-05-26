import React from 'react'

const Header = ({showCharacter}) => {
  return (
    <button
          onClick={() => showCharacter()}
          className="btnFav"
          >
          Show favourites
        </button> 
  )
}

export default Header
