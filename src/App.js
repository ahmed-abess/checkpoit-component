import React from 'react'
import './App.css';
import PhotoProfile from "./component/Profile/ProfilePhoto";
import FullName from './component/Profile/FullName.js'
import Adress from "./component/Profile/Adress";

class App extends React.Component{
 render(){
   return (
       <div className="App">
         <div className="side-bar">

            <PhotoProfile/>
            <div className="info">
            <FullName/>
            <Adress/>

            </div>
         </div>

       </div>
   );
 }
}

export default App;
