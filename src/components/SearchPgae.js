import { useState } from "react";

export default function SearchPage({newSearch}) {
    const [searchT, setsearchT] = useState('');


    const handleChange=(e)=>{
        setsearchT(e.target.value);
    };

    const handleClick=(e)=>{
        e.preventDefault();
        newSearch(searchT);
        setsearchT('');
    }

    return(
        <div>
            <h1>3CX Call History</h1>
            <input type="text"
            placeholder="Name or Ext."
            value={searchT}
            onChange={handleChange}
            ></input>
            <button onClick={handleClick}>Search</button>

        </div>
    );
}