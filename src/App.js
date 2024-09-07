import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Header from "./components/header/header";

const App = () => {
  //https://jsonplaceholder.typicode.com/users

  const [searchFiled, setSearchFiled] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => setMonsters(user));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFiled);
    })
    console.log('rendering filtered')
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchFiled])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchFiled(searchFieldString);
  };

  return (
    <div className="App">
      <Header />
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"monster search"}
        className={"monster-search-box"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
