import React from 'react'
import { Link } from "react-router-dom";
import "./login/logscr/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className='box'>
      <div className="nave">
      <button type="button" class="btn btn-light  btn-lg but1">EDRP</button>
     <Link to="/form"><button type="button" class="btn btn-light  btn-lg but1">Form</button></Link> 
      <button type="button" class="btn btn-light  btn-lg but1"> Admit Card</button>
      <button type="button" class="btn btn-light  btn-lg but1"> Submision </button>
      <button type="button" class="btn btn-light  btn-lg but1"> Admit Card</button>
      <Link to="/"><button type="button" class="btn btn-outline-warning  btn-lg but2"> Logout</button></Link>
      </div>
      
      
    </div>
  )
}

