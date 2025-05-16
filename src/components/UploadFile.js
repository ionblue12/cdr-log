export default function UploadFile({results, element}){

    return(
        <table>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Extension</th>
                <th>Name</th>
                <th>Destination</th>
                <th>Duration</th>
                <th>Terminated by</th>
            </tr>
            {results? results.filter(result=>element === result.name || element === result.source).map((person)=><tr key={person.id}>
                <th>{person.date}</th>
                <th>{person.time}</th>
                <th>{person.source}</th>
                <th>{person.name}</th>
                <th>{person.dest}</th>
                <th>{person.duration}</th>
                <th>{person.terminated}</th>
            </tr>) : (<h1>no result</h1>)}
        </table>
    );
}