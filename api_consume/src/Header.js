import React,{useEffect} from 'react';
import {AppBar,Toolbar} from "@material-ui/core"
import {Button,Row,Col} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './App.css';
//import Googlelogin from './googlebutton.component.js'
import {Badge} from 'react-bootstrap';
function Header() {
  const navigate = useNavigate();
  useEffect(async () => {
    try{
    const res=await axios("http://localhost:5000");
      console.log(res.data);
    }catch (err) {
      // Handle Error Here
      console.log(err);
  }
  },[]);
  function onHomeChange(e) {
    console.log("home is re-rendered");
    navigate('/')
}
  // const displayHeader=() =>{
  //   return <div style={{display:"flex",justifyContent:"space-evenly"}}>
  //     <Button onChange={(e)=> onHomeChange(e)}>Home</Button>
  //     <Button>News</Button>
  //     <Button>About</Button>
  //   </div>

  // };
  return (
    <div className="abc">
    <div style={{display:"flex",justifyContent:"flexdirection"}}>
    <Button onClick={(e)=> onHomeChange(e)}>Home</Button>
    <Button>News</Button>
    <Button>About</Button>
  </div>
  </div>
  );
}

export default Header;
