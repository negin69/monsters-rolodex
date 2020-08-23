
import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      monsters:[],
      searchField:''
     }
  }

  handleChange= (e) => {
   this.setState({searchField:e.target.value});
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  render() { 
    const {monsters , searchField}=this.state;
const filteredMonsters=monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return ( 
      <div className="App" >
        {/* <input type="search" placeholder="search monsters" onChange={e =>
          
         this.setState({searchField:e.target.value} ) } /> */}
       <h1>Monsters Rolodex</h1>
       <SearchBox  placeholder="search monster" handleChange={this.handleChange} />
       <CardList monsters={filteredMonsters} />
      </div>
     );
  }
}
 
export default App;














// import React from 'react';
// import './App.css';
// import CardList from './components/card-list/card-list.component';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       monsters:[]
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({monsters:users}))
//   }

// render(){
//   return (
//     <div className="App">
//       <CardList monsters={this.state.monsters } />
//     </div>
//   );
// }

// }
// export default App;
