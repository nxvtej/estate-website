// import { Express } from "express-serve-static-core";
import express from 'express';

const app = express();

app.listen(3000, ()=> {
    console.log('Server is running on port 3000!!');
});