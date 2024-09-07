import {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
//https://jsonplaceholder.typicode.com/users
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  onSearchChange = ( event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({searchField: searchField})
  }

  render() {

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
      <input type="search" placeholder="search monsters" className="search-box" onChange={onSearchChange}/>
      {
        filteredMonsters.map((monster, id) => {
          console.log(monster.id)
          return  <h1 key={monster.id}>{monster.name}</h1>
        })
      }
       
      </div>
    );
  }
}

export default App;
