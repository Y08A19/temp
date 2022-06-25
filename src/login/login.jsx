import React, { useState } from "react";
import "./logscr/log.css";
import { Link } from "react-router-dom";

export default function Login(props) {
   const [datauser, getdatauser] = useState("");
   const [datapass, getdatapass] = useState("");
   const [butpass, isbutpass] = useState(false);

const [susses,setsusses]=useState(false)
  function getDatauser(event) {
  
    getdatauser(event.target.value)
    checksuss()
  
  }
  function getDatapass(event) {
  
    getdatapass(event.target.value)
    checksuss()
  }
function checksuss(){
if(datapass.length!==0&&datauser.length!==0)
{
 setsusses(true)
}
}
  return (
    <div className="card">
    
      <div className=" logo"></div>
      <div className="wrapper">
        <div className="input-data">
          <input id="userid" type="text" onChange={getDatauser} required />
          <div className="underline" />
          <label>UserId</label>
        </div>
      </div>
      <div className="wrapperp">
        <div className="input-data">
          <input id="pass" type="password" onChange={getDatapass} required />
          <div className="underline" />
          <label>password</label>
        </div>
      </div>
      <div></div>
      <div className="butt">
     {susses? <Link to="/home" ><button id="butto"  type="button" onClick={props.data(datauser,datapass)} >
          LogIn
        </button></Link>:<button id="butto"  type="button"  >
          LogIn
        </button>}
      
      </div>
    </div>
  );
}
