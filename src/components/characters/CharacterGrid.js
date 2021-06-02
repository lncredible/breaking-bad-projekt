import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'



//Om isLoading är false, då har items inte fetchats än, vi visar "Loading" till användaren. Annars gå igenom alla items och visa dem i CharacterItem komponent
const CharacterGrid = ({items, isLoading, saveFavourite, deleteFavourite}) => {
    return isLoading ? (<Spinner/>) : (<section className="cards">
        {items.map(item => (
            <CharacterItem key={item.char_id} item ={item} onClick={saveFavourite} onDelete={deleteFavourite}></CharacterItem>
        ))}
    </section>)
}

export default CharacterGrid
