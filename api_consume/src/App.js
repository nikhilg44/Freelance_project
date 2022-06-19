import React,{Suspense} from 'react';
import Login from './Login.js';
import Api from './Api2.js'
import Refer from './Refs.js'
import Register from './Register.js';
import Header from './Header.js';
import Chart from './Chart.js';
import Calen from './Calender.js';
import './App.css'
//import Googlelogin from './googlebutton.component.js'
import {Badge} from 'react-bootstrap';
const Googlelogin=React.lazy(()=> import('./googlebutton.component.js'));
function App() {
  return (
    <div>
    <Header></Header>
    <Calen></Calen>
    <div className='pt-5 mt-5' style={{textAlign:"center"}}>
      <h2 ><Badge>My React App</Badge></h2>
      <Login/>
      <Suspense fallback={<div>Loading...</div>}>
      <Googlelogin/>
      </Suspense>
     <footer style={{position: "absolute",bottom:"0",width:"100%",height:"30px",background:"#6cf"}}>
       <marquee>This is my React App!</marquee></footer>
    </div>
    </div>
  );
}

export default App;
