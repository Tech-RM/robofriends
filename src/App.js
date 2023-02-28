import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {cats} from './cats';

class App extends Component{
    constructor(){
        super()
        this.state={
            // cats : cats,
            searchField:''
        }
    }
    //SearchField change and state update function.
    onSearchChange=(event)=>{
        this.setState({searchField : event.target.value});

    }
    render(){
        const filteredCats=cats.filter(cat=>{
            return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
            return(
                <div className='tc'>
                    <h1>My Pretty Cats</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList cats={filteredCats}/>
                </div>
            )
        }
}
export default App;