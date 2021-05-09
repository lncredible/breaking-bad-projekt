import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import axios from 'axios'

const App = ()=> {


  const[items, setItems] = useState([]) //Här ska vi lägga in items efter vi fetchar från API
  const[isLoading, setIsLoading] = useState(true) //isLoading state true, när vi har lyckats fetcha items blir den till false
  const[query, setQuery] = useState('') //Search hantering, state ändras till texten från search-boxen, annars empty sträng som fetchar alla items

  useEffect(()=>{ //useEffect används för att fetcha items, vi lägger till [query] som dependency för att kalla om när användaren söker efter karaktärer
    const fetchItems = async () =>{ //Denna inner funktionen används för att kunna använda async och await
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`) //Fetchar items från API

      setItems(result.data) //Efter items är fetchade lägger vi in dem i items
      setIsLoading(false)//isLoading state till false, då vi har fått tag på items
    }
    fetchItems();
    
  }, [query]) //När query ändras körs den här metoden om

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=> setQuery(q)}/>
      <CharacterGrid isLoading = {isLoading} items = {items} />
    </div>
  );
}

export default App;
