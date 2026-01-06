let express = require('express');
let cors=require('cors');
let app = express();
let libraryRouter = require('./routes/libraryRouter')

require('dotenv').config();

app.use(express.json());
app.use(cors());



let mongoose = require('mongoose');

mongoose.connect(process.env.DBURL).then( ()=>{
    console.log("Connected to Database");
    app.listen(process.env.PORT || '8020',()=>{
        console.log("Server is running");
    })
}).catch((err)=>{
        console.log("Error connecting",err);
});

app.use('/api/website/library',libraryRouter)
//http:localhost:8000/api/website/library/insert