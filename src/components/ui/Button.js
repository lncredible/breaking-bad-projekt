import React from 'react'

const Header = ({showCharacter}) => {
  return (
    <button
            onClick={() => showCharacter()}
          style={{ backgroundColor: "blue", marginTop: "10px" }}
          className="btnFav"
          >
          Show favourites
        </button> 
  )
}

export default Header
