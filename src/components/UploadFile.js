import './UploadFile.css';
export default function UploadFile({results}){

    const fixDate=(date)=>{
        const fixed = date.split('/');
        const newDate = fixed[1]+'/'+fixed[2]+'/'+fixed[0];
        return newDate;
    }

    return(
        <div>
            {results.length>0? (
                <table className="Table-set">
                    <thead className='Thead-set'>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Extension</th>
                            <th>Name</th>
                            <th>Destination</th>
                            <th>Duration</th>
                            <th>Terminated-by</th>
                            </tr>
                    </thead>
                    <tbody>
                        {results.map(person=>
                        
                            <tr key={person.id}>
                                <td>{fixDate(person.date)}</td>
                                <td>{person.time}</td>
                                <td>{person.source}</td>
                                <td>{person.name}</td>
                                <td>{person.dest}</td>
                                <td>{person.duration}</td>
                                <td>{person.terminated}</td>
                         </tr>)}
                </tbody>
            </table>) : (<div>no results found</div>)}
        </div>
    );
}