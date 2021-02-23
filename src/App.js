import './App.css';
import React, { useState } from 'react';

function App() {
  return <div>

    <Folder name="Desktop">
      <Folder name="Grand Theft Auto V">
        <File name="GTA.exe"/>
        <File name="settings.xml"/>

      </Folder>
      <File name="React Tutorial.mp4"/>
      <File name="Levels.mp3"/> 
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
    <span onClick={handleClick}>                        {/* {function} pass the entire function as a prop. {function()} pass the return value of the function */}

      <i className="orange folder icon"></i>
      {isOpen ? <i className="caret down icon" ></i> : <i className="caret right icon" ></i>}
      {name}
    </span>     
    <div style={{marginLeft:'20px'}}>
      {isOpen ? children : null}
    </div>
  </div>;
}

const File = (props)=>{
  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    "mp4" : "file video icon",
    "mp3" : "file audio icon",
    "png" : "file image icon",
    "exe" : "edge icon"
  };
  
  return <div><i className={fileIcons[fileExtension]}></i>{name}</div>;
}


export default App;
