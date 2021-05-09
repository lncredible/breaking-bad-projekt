import React, {useState} from 'react'

const Search = () => {
    return (
        <section className="search">
            <form>
                <input type="text" className="form-control" placeholder="Search for characters" autoFocus></input>
            </form>
        </section>
    )
}

export default Search
