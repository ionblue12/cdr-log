import logo from './logo.svg';
import './App.css';
import UploadFile from './components/UploadFile';
import SearchPage from './components/SearchPgae';
import { useEffect, useState } from 'react';
function App() {
  const[nameEx, setnameEx] = useState('')
  const [ext, setExt] = useState([]);
  
  const getData = async()=>{
    const res = await fetch('http://localhost:5000/api/history');
    const data = await res.json();
    console.log('all data',data)
    setExt(data);
  }
  useEffect(()=>{
    getData()
  }, [nameEx]);
  


  return (
    <div className="App">
      <UploadFile info={getData}/>
      <SearchPage newSearch={setnameEx}/>
      <UploadFile results={ext} element={nameEx}/>
    </div>
  );
}

export default App;
