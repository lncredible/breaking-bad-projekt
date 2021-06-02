import React from 'react'

const Header = ({showCharacter, text, cName}) => {
  return (
    <button
          onClick={() => showCharacter()}
          className={cName}
          >
          {text}
        </button> 
  )
}

export default Header
