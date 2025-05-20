import { useState } from "react";

export default function SearchPage({newSearch, findDate}) {
    const [searchT, setsearchT] = useState('');
    const [date, setDate] = useState('')


    const handleChange=(e)=>{
        setsearchT(e.target.value);
    };

    const handleClick=(e)=>{
        e.preventDefault();
        const searLetter = searchT.charAt(0).toUpperCase() + searchT.slice(1);
        newSearch(searLetter);
        findDate(date)
        
        
    }

    return(
        <form onSubmit={handleClick}>
            <h1>3CX Call History</h1>
            <input type="text"
            placeholder="Name or Ext."
            value={searchT}
            onChange={handleChange}
            ></input>
            <button>Search</button>
            <input 
            type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            ></input>

        </form>
    );
}