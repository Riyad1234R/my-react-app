import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
     <Mycomponent brand="Apple" price="50000"></Mycomponent>
     <Mycomponent brand="Realme" price="10000"></Mycomponent>
     <Mycomponent brand="Xiomi" price="2000"></Mycomponent>
     <Mycomponent brand="Oppo" price="240000"></Mycomponent>
     
    </div>
  );
}
function LoadUsers(){
  const [users,setUsers]=useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())
  .then(data=>setUsers(data))
},[])

  return(
    <div>
      <h1>User loded{users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}
function User(props){
  return(
    <div className='user'>
      <h2>name: {props.name}</h2>
      <p>Call me baby!!! {props.phone}</p>
    </div>
  )
}

function Mycomponent(props){
  const [points,setPoints]= useState(1);
  const myStyle={
backgroundColor:'lightblue',
border:'3px solid blue',
margin:'20px',
padding:'10px',
fontWeight:'bold'
  }
  const handlarAddPoints =()=>{
    const newPoints =points *2;
    setPoints(newPoints);

  }
  return(
    <div style={myStyle}>
      <h1>your honey Mama {props.brand}!!</h1>
      <h4>asking money, price:{props.price} I have points:{points}</h4>
      <button onClick={handlarAddPoints}>Add point</button>
      <p>I can write my won component</p>
    </div>
  )
}

export default App;
