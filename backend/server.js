const express = require('express');
const fs = require('fs');
const app= express();
const csv = require('csv-parser');
const PORT = 5000
const cors = require('cors');

app.use(cors());


app.get('/api/history', (req, res, next)=>{
    results=[];
    fs.readFile("file/path/file.log", 'utf-8', (err,data) =>{
        if(err){
            console.log("Error reading the file", err);
            return;
        }
        const lines = data.split('\n');
        lines.forEach(line =>{
            const lineSplit = line.trim().split(/,| /);
            results.push({
                'id': lineSplit[1],
                'duration': lineSplit[2],
                'date': lineSplit[3],
                'time': lineSplit[4],
                'terminated': lineSplit[5],
                'dest': lineSplit[6],
                'source': lineSplit[7],
                'name': lineSplit[8]
            })
        })
        res.send(results);
    });
    
});

app.listen(PORT, '192.xx.xx.xx', ()=>{
    console.log(`The server is listening on port ${PORT}`);
})