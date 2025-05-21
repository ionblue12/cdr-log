import logo from './logo.svg';
import './App.css';
import UploadFile from './components/UploadFile';
import SearchPage from './components/SearchPgae';
import { useEffect, useState } from 'react';
function App() {
  const[nameEx, setnameEx] = useState('')
  const [ext, setExt] = useState([]);
  const [searchDate, setSearchDate] = useState('')

  
  

  console.log('date', searchDate); 
  const getData = async(element, orgDate)=>{
    const res = await fetch('http://192.xx.xx.xx:5000/api/history');
    const data = await res.json();
    
    const filteredData = data.filter(result=>element === result.name && new Date(orgDate) <= new Date (result.date) || element === result.source && new Date(orgDate) <= new Date (result.date))
    console.log('filter', filteredData)
    if(filteredData.length > 0){
      setExt(filteredData);
    }
    else{
      setExt([]);
    }
  }
  useEffect(()=>{
    getData(nameEx, searchDate);
  }, [nameEx, searchDate]);
  


  return (
    <div className="App">
      <SearchPage newSearch={setnameEx} findDate={setSearchDate}/>
      <UploadFile results={ext}/>
    </div>
  );
}

export default App;
