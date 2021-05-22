import React from 'react'


//Lite styling till varje item (karaktär) från API. Använder card klass för att representera info
const CharacterItem = ({item, onClick}) => {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
          <button
          onClick={() => onClick(item)}
          style={{ backgroundColor: "green", marginTop: "10px" }}
          className="btn btn-primary"
          >
          Save to favourites
        </button> 
        </div>
      </div>
    </div>
    )
}

export default CharacterItem
