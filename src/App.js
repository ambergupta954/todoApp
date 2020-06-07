import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';
import Incomplete from './components/pages/Incomplete';
import Completed from './components/pages/Completed';
import Search from './components/Search';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        completed: false,
        title: 'hello',
        pop: false
      },
      {
        id: uuid.v4(),
        completed: false,
        title: 'do homework',
        pop: false
      },{
        id: uuid.v4(),
        completed: false,
        title: 'lunch',
        pop: false
      }
    ],

  };

  componentDidMount() {
    let keys=Object.keys(localStorage);
    let i= keys.length;
    let data=[];
    while(i--){
      data.push(JSON.parse(localStorage.getItem(keys[i])))
    }
    this.setState({
      todos: data
    })
   
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          let data=JSON.parse(localStorage.getItem(id))
          data.completed = !data.completed
          localStorage.setItem(id,JSON.stringify(data));
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    localStorage.removeItem(id);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
    
  };

  updateTodo = (id,name) => {
    console.log('update')
    let data = localStorage.getItem(id);
    data = data ? JSON.parse(data) : {};
    data.title=name;
    localStorage.setItem(id,JSON.stringify(data));
     this.setState({
      todos: this.state.todos.map(todo =>{
       if(todo.id === id)
        {
          todo = data
        }
        return todo;
       })
     })
    
  }

  popup = id =>{
    this.setState({
      todos: this.state.todos.map(todo=>{
        if(todo.id === id)
        {
          todo.pop =!todo.pop;
        }
        return todo;
      })
    })
  }

  // Add Todo
  addTodo = title => {
    let data ={
      id: uuid.v4(),
      completed: false,
      pop: false,
      title
    }
    this.setState({
      todos: [...this.state.todos,data]
    })
  
    localStorage.setItem(data.id,JSON.stringify(data))

  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                    updateTodo={this.updateTodo}
                    popup={this.popup}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/Incomplete" render={()=>(<Incomplete
            todos={this.state.todos}
             markComplete={this.markComplete}  
             updateTodo={this.updateTodo}
             popup={this.popup}
             delTodo={this.delTodo}/>)}  />
             <Route path="/Completed" render={()=>(<Completed
            todos={this.state.todos}
             markComplete={this.markComplete}  
             updateTodo={this.updateTodo}
             popup={this.popup}
             delTodo={this.delTodo}/>)}  />
             <Route path="/Search" render={()=>(<Search todos={this.state.todos}
             markComplete={this.markComplete}
             />)}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;