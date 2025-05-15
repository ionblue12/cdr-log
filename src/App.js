import logo from './logo.svg';
import './App.css';
import UploadFile from './components/UploadFile';
import SearchPage from './components/SearchPgae';
function App() {

  const getData = async()=>{
    const res = await fetch('http://localhost:5000/api/history');
    
    const data = await res.json();
    console.log('data',data)
    return data;
  }
  
  return (
    <div className="App">
      <UploadFile info={getData}/>
      <SearchPage />
    </div>
  );
}

export default App;
