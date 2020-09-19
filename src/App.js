import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      val: sessionStorage.getItem('key'),
    }

  }
	
	save=(e)=>{
		sessionStorage.setItem("key", this.state.val);
		alert('Saved');
	}
	remove=(e)=>{
		sessionStorage.removeItem("key");
		alert('Removed');
	}
	show=(e)=>{
		let value = sessionStorage.getItem("key");
		this.setState({val:value});
		alert('Stored value is ' + value);
	}
	render(){
  return (
    <div className="App">
      <header className="App-header">
	        <input type="text" value={this.state.val} onChange={(event)=>{
				this.setState({val:event.target.value});
			}
			}/>
            <button onClick={this.save}>Save</button>
			<button onClick={this.remove}>Remove</button>
			<button onClick={this.show}>Retrieve</button>
      </header>
    </div>
  );
	}
}

export default App;
