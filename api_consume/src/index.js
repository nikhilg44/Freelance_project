import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import News from './News.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { useLocation,useNavigate } from "react-router-dom";
import Register from './Register.js';
import Login from './Login.js';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute.js'
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if(error.response.status == 401){
    //navigate('/',{state:{email:"invalid"}})
    window.location.reload()
  }
  return Promise.reject(error);
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routers/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
function Routers()
{
  const user=localStorage.getItem("Email");
  return <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/register" element={<Register/>} />
        {user!=null?
        <Route path="/news" element={<News/>}></Route>
        : <Route path="/news" element={<App/>} />}

        {/* <Route path="/news/*" element={ <ProtectedRoute
                isAuth={isAuth}
                component={<News locationdata={useLocation()}/>}
                path={'/news'}
             />}  /> */}
  </Routes>
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
