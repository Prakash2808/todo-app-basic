const express = require('express');
const port  = 8002;

const app = express();


app.listen(port , function(err){
    if(err) {
        console.log(`Error is : ${err}`);
        return;
    }
    console.log("Server is running on the port " + port);
});
