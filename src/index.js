import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
 constructor(){
   super()
 }
 render(){
   return(
   <div className="app">
     <h1>ToDo List</h1>
   </div>
   )
 }
}

ReactDOM.render(<App />, document.getElementById('root'));