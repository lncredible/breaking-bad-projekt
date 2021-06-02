import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import Button from "./components/ui/Button";
import axios from "axios";

const App = () => {
  const [favourites, setFavourites] = useState([]); //Här sparas karaktärer som användaren favoriserar
  const [items, setItems] = useState([]); //Här ska vi lägga in items efter vi fetchar från API
  const [isLoading, setIsLoading] = useState(true); //isLoading state true, när vi har lyckats fetcha items blir den till false
  const [query, setQuery] = useState(""); //Search hantering, state ändras till texten från search-boxen, annars empty sträng som fetchar alla items

  useEffect(() => {
    //useEffect används för att fetcha items, vi lägger till [query] som dependency för att kalla om när användaren söker efter karaktärer
    fetchItems();
    fetchFavourites();
  }, [query]); //När query ändras körs den här metoden om

  const fetchItems = async () => {
    //Denna funktionen används för att kunna använda async och await
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    ); //Fetchar items från API
    setItems(result.data); //Efter items är fetchade lägger vi in dem i items
    setIsLoading(false); //isLoading state till false, då vi har fått tag på items
  };
  const fetchFavourites = () => {
    const jsonChars = localStorage.getItem("favourites");
    const parsedChars = JSON.parse(jsonChars);
    if (parsedChars) {
      //Om det finns sparade karaktärer
      setFavourites(parsedChars); //Detta är "main" funktionen efter vi har karaktärena i listan, då applikation lyssnar när items ändrar sin state så tar det hand om resten
    }
  };

  const saveCharacter = (item) => {
    //Metod som sparar en karaktär (item) i local storage
    const favChars = [...favourites];
    var index = -1;
    for (let i = 0; i < favChars.length; i++) {
      if (favChars[i].char_id == item.char_id) {
        index = i;
      }
    }
    if (index === -1) {//Kollar om karaktärer redan existerar som favorit // -1 betyder att karaktärer inte finns och då lägger vi till, om karaktärer redan finns behövs inte funktionalitet
      favChars.push(item);
      setFavourites(favChars);
      const jsonObj = JSON.stringify(favChars);
      localStorage.setItem("favourites", jsonObj);
    }
  };
  const deleteItem = (item) => {
    //Metod som sparar en karaktär (item) i local storage
    const favChars = [...favourites];
    var index = -1;
    for (let i = 0; i < favChars.length; i++) {
      if (favChars[i].char_id == item.char_id) {
        index = i;
      }
    }
    if (index !== -1) {//Kollar om karaktärer redan existerar som favorit // -1 betyder att karaktärer inte finns och då behövs ingen funktionalitet, om karaktärer finns tar vi bort
      favChars.splice(index, 1);
      setFavourites(favChars);
      const jsonObj = JSON.stringify(favChars);
      localStorage.setItem("favourites", jsonObj);
      (favChars.length <= 0) ? showAll() : showSavedCharacters()
    }
  };
  const showSavedCharacters = () => {
    //Metod som visar de sparade karaktärer i local storage
    const jsonChars = localStorage.getItem("favourites");
    const parsedChars = JSON.parse(jsonChars);
    if (parsedChars) {
      //Om det finns sparade karaktärer
      setItems(parsedChars); //Detta är "main" funktionen efter vi har karaktärena i listan, då applikation lyssnar när items ändrar sin state så tar det hand om resten
    }
  };
  const showAll = ()=>{
    setQuery("")
    fetchItems()
  }
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Button showCharacter={showSavedCharacters} text={"Show favourites"} cName={"btnFav"}/>
      <Button showCharacter={showAll} text={"Show all"} cName={"btnAll"}/>
      <CharacterGrid
        isLoading={isLoading}
        items={items}
        saveFavourite={saveCharacter}
        deleteFavourite={deleteItem}
      />
    </div>
  );
};

export default App;
