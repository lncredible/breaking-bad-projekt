import React, {useState} from 'react'


const Search = ({getQuery}) => {

    const [text , setText] = useState('') //State ändras när användaren söker genom setText(q) i onChange() funktionen nedanför

    const updateQuery = (q) =>{ //Kallas när användaren söker i search-boxen genom onChange attribut i <input> elementet, q är söksträngen (query)
        setText(q)
        getQuery(q) //Eftersom vi vill fetcha och visa nya resultat anropar vi getQuery(q) vilket kör om fetch metoden i App.js
    }
    return (
        <section className="search">
            <form>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Search for characters" 
                value={text}
                onChange={(e)=> updateQuery(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
