import React, { Component } from 'react'
import { SearchList } from './SearchList';

export default class Search extends Component {
    state ={
        searchterm: '',
        filter:[]
    }
    onSubmit =(e)=>{
        e.preventDefault();
       
    }
    searchTodo=()=>{
       
       this.setState({
           filter: this.props.todos.filter(todo=>{
            return todo.title.toLowerCase().includes(this.state.searchterm.toLocaleLowerCase());
           })
       })
       
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.searchTodo();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input 
                    type="text" 
                    name="searchterm" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Search Todo..." 
                    value={this.state.searchterm}
                    onChange={this.onChange}
                    />
                    <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style={{flex: '1'}}
                    />
                </form>
               {
                   this.state.filter.map(todo =>{
                       return <SearchList key={todo.id} todo={todo}  markComplete={this.props.markComplete} />
                   })
               }
            </div>
        )
    }
}
