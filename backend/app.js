const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const sequelize = require('./db/connectTodb');
const employeeRoutes = require("./router/employeeRouter");
const app = express();
dotenv.config();
PORT = process.env.PORT;
app.use(bodyParser.json());


app.use("/api/employees", employeeRoutes);



app.use('/', (req,res)=>{
res.send("<h1>Hi MYSQL server</h1>");
});

sequelize.sync({alter : true })
.then(()=> console.log("DB synced")).
catch((err)=>console.log("error in Syncing db", err));

app.listen(PORT , async()=>{
    console.log(`server connected at port ${PORT}`);

});
