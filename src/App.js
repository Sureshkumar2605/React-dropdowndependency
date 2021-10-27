import logo from './logo.svg';
import './App.css';
import Organisations from './organisations';
import { useEffect, useState } from 'react';
import Dropdown1 from './components/Dropdown1';
import Dropdown2 from './components/Dropdown2';

const data = {
  "organisations": {
      "organisation1": ["platform1.1", "platform1.2", "platform1.3", "platform1.4"],
      "organisation2": ["platform2.1", "platform2.2", "platform2.3", "platform2.4"],
      "organisation3": ["platform3.1", "platform3.2", "platform3.3", "platform3.4"],
      "organisation4": ["platform4.1", "platform4.2", "platform4.3", "platform4.4"]
  },
}

function App() {

  const [orgList,setOrgList] = useState([]);
  const [orgData,setOrgData] = useState([])

  useEffect((val)=>{
    setOrgList(Object.keys(data.organisations))
  },[])
  
  let onOrgChange=(val)=>{
    setOrgData(Object.values(data.organisations[val]))
  }

  console.log(orgData)

  return (
    <div className="App">
      <h1>Task Dropdown Dependency</h1> <br/>
      <div className="input-group" style={{marginLeft:"630px"}}>
      <Dropdown1 orgList= {orgList} onOrgChange={onOrgChange}/> <span>&nbsp; &nbsp;</span>
      <Dropdown2 orgData={orgData}/>
      </div>
      
    </div>
  );
}

export default App;
