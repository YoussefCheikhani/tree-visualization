import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  return <div>

    <Folder name="Desktop">
      <Folder name="Grand Theft Auto V">
        <File name="GTA.exe"/>
        <File name="settings.xml"/> 
      </Folder>
      <File name="Microsoft Edge.exe"/>
      <File name="Photo.png"/>
    </Folder>
    <Folder name="Applications"/>
    

  </div>;
}

const Folder =(props) =>{
  const [isOpen, setIsOpen] = useState(false);
  const {name, children} = props;

  const handleClick = () =>{
    setIsOpen(!isOpen);
  }

  return <div>
    <span onClick={handleClick}>{name}</span>     {/* {function} pass the entire function as a prop. {function()} pass the return value of the function */}
    <div style={{marginLeft:'20px'}}>
      {isOpen ? children : null}
    </div>
  </div>;
}

const File = (props)=>{
  return <div>{props.name}</div>;
}


export default App;
