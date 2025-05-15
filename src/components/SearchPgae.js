import { useState } from "react";

export default function SearchPage() {
    const [searchT, setsearchT] = useState('');
    const handleChange=(e)=>{
        setsearchT(e.target.value);
    }

    return(
        <div>
            <h1>3CX Call History</h1>
            <input type="text"
            placeholder="Name or Ext."
            ></input>
            <button>Search</button>

        </div>
    );
}