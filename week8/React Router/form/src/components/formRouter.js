import React  from "react";
import {Link,Route,Switch} from "react-router-dom"
import Form from "./form";
import List from "./list";
import Home from "./home"
export default function FormRouter() {
    return (<div className="App">
    
     <div>
    <nav className="navbar">
     <ul className="nav">
     <li>
       <Link to="/">Home</Link>
       </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
       <li>
         <Link to="/list">User List</Link>
         </li>
     </ul>
     
     </nav>
     {/* anasayfa olarak home u ayarliyoruz */}
     <Switch>
     <Route exact path="/"> <Home/></Route>
     <Route path="/form"> <Form/></Route>
     <Route path="/list"> <List/></Route> 
     </Switch>
     
    </div>
           
    
   
   
     
    </div>
  
  );
  }
  