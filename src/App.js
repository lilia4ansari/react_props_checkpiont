
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import React from 'react'

function App() {
 const handleName = (fullName) => alert(fullName)
    return (
      <div>
        <h1 style={{ padding: "10px 10px", textAlign: "center", color: "green"}}>this is a parent component </h1>
        <ProfileComponent handleName ={handleName }/>
      </div>
    );

}
export default App;
