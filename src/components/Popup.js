import React from 'react';

class Popup extends React.Component {

    state={
        updateValue: ''
    }
    onSubmit =(e)=>{
        e.preventDefault();
        
        this.props.updateTodo(this.props.id, this.state.updateValue)
       
    }
    onChange=(e)=>{

        this.setState({ [e.target.name]: e.target.value });
    }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input 
          type="text" 
          name="updateValue" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Update todo..." 
          value={this.state.updateValue}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1'}}
        />
      
          </form>
          <br></br>
          <br></br>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}


export default Popup;